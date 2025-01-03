"use client"
import { useCallback, useMemo, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react";
import { useShallow } from 'zustand/react/shallow';
import "@xyflow/react/dist/style.css";
import FlowOptions from "./FlowOptions";
import InputNode from "./nodes/InputNode";
import OutputNode from "./nodes/OutputNode";
import TextNode from "./nodes/TextNode";
import DnDProvider from "./dnd/DnDProvider";
import CustomEdge from "./CustomEdge";
import OpenAINode from "./nodes/llmNodes/OpenaiNode";
import { PanelGroup,Panel, PanelResizeHandle } from "react-resizable-panels";
import RunPipeline from "../pipeline/runPipeline/RunPipeline"
import flowStore from "@/lib/zustand/flowStore/flowStore";
import { FlowState } from "@/lib/zustand/flowStore/types";
import toggleStore from "@/lib/zustand/toggleStore.ts/toggleStore";

const selector = (state:FlowState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setNodes:state.setNodes
});



 function Flow() {

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect,setNodes } = flowStore(
    useShallow(selector),
  );

  const nodeTypes = useMemo(() =>({
    inputNode:InputNode,
    outputNode:OutputNode,
    textNode:TextNode,
    opeanAINode:OpenAINode
  }),[])

  const edgeTypes = useMemo(() => ({
    edge1: CustomEdge,
  }), []);
 



  const [openOptions, setOpenOptions] = useState<boolean>(false)
  const { screenToFlowPosition } = useReactFlow();


 
  const onEdgesDelete = useCallback((edges: Edge[]) => {
    console.log("Deleted edges:", edges);
  }, []);
  
  const onNodesDelete = useCallback((nodes: Node[]) => {
    console.log("Deleted nodes:", nodes);
  }, []);

 
  

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const data = event.dataTransfer.getData("application/json");
  
      const { type, label } = JSON.parse(data);
      const id = crypto.randomUUID();
  
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
  
      setNodes(id, position, type, { label:label });
    },
    [screenToFlowPosition,setNodes]
  );
  

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);


  return (
    <div style={{ height: "89vh", position:"relative" }}>
     {openOptions && <FlowOptions setNodes={setNodes}/> }
     { openOptions ? <RiCloseLargeFill className="absolute ml-8 mt-36 text-gray-500 z-20 cursor-pointer hover:shadow-2xl rounded-full" size={20} onClick={() => setOpenOptions(!openOptions)}/> : <MdAddCircle className="absolute ml-8 mt-1 text-gray-500 z-20 cursor-pointer hover:shadow-2xl rounded-full" size={35} onClick={() => setOpenOptions(!openOptions)}/>
     }
      <ReactFlow
        maxZoom={1.7}
        minZoom={0.5}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onEdgesDelete={onEdgesDelete}
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesDelete={onNodesDelete}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView={false}
      >
        <Background />
        <Controls position="bottom-left" />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default () =>{ 

  const {showPipeline} = toggleStore()
  
  return(
  <ReactFlowProvider>
      <PanelGroup direction="horizontal">
      <Panel defaultSizePercentage={70} minSizePercentage={0}>
    <DnDProvider>
      <Flow />
      </DnDProvider>
      </Panel>
      {showPipeline && (
        <>
            <PanelResizeHandle   style={{ 
              width: "3px", 
              backgroundColor: "white", 
              borderLeft: "2px solid #6B7280" 
            }}  />
            <Panel defaultSizePercentage={30} minSizePercentage={30}>
              <RunPipeline  />
            </Panel>
            </>
          )}
      </PanelGroup>
  </ReactFlowProvider>
)
}