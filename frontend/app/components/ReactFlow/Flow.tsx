"use client"
import { useCallback, useMemo, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  type Edge,
  type Node,
  ReactFlowProvider,
  useReactFlow
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import FlowOptions from "./FlowOptions";
import InputNode from "./nodes/InputNode";
import OutputNode from "./nodes/OutputNode";
import TextNode from "./nodes/TextNode";
import DnDProvider from "./dnd/DnDProvider";
import CustomEdge from "./CustomEdge";
import OpenAINode from "./nodes/llmNodes/OpenaiNode";


 function Flow() {
  const nodeTypes = useMemo(() =>({
    inputNode:InputNode,
    outputNode:OutputNode,
    textNode:TextNode,
    opeanAINode:OpenAINode
  }),[])

  const edgeTypes = useMemo(() => ({
    edge1: CustomEdge,
  }), []);
 

  
  
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  // console.log(nodes)
  
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // console.log(edges)
  const [openOptions, setOpenOptions] = useState<boolean>(false)
  const { screenToFlowPosition } = useReactFlow();


  // Handle new connections between nodes
  const onConnect: OnConnect = useCallback(
    (connection) =>{
       setEdges((eds) => addEdge({...connection, "type":'edge1'}, eds))},
    [setEdges]
  );

  const onEdgesDelete = useCallback((edges:Edge[]) => {
    // console.log("edges",edges)
  },[])

  const onNodesDelete = useCallback((nodes:Node[])=> {
    // console.log("nodes",nodes)
  },[])

 
  

  const onDrop = useCallback(
    (event:React.DragEvent) => {
    event.preventDefault();
  const data = event.dataTransfer.getData("application/json");

  const { type,label } = JSON.parse(data)
  
  const id = crypto.randomUUID();

  const position = screenToFlowPosition({
    x: event.clientX,
    y: event.clientY,
  });
     
      
  setNodes((prev: any) => [...prev, { id, position, type,data:{label} }]);
    },
    [screenToFlowPosition,],
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

export default () => (
  <ReactFlowProvider>
    <DnDProvider>
      <Flow />
    </DnDProvider>
  </ReactFlowProvider>
);