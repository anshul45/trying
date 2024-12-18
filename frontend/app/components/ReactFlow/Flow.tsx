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
import { DnDProvider, useDnD } from './DnDContext';

 function Flow() {
  const instance = useReactFlow()


  const nodeTypes = useMemo(() =>({
    inputNode:InputNode,
    outputNode:OutputNode,
    textNode:TextNode
  }),[])

  const edgeTypes = {
    
  }
 

  
  
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [openOptions, setOpenOptions] = useState<boolean>(false)

  // Handle new connections between nodes
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const onEdgesDelete = useCallback((edges:Edge[]) => {
    console.log("edges",edges)
  },[])

  const onNodesDelete = useCallback((nodes:Node[])=> {
    console.log("nodes",nodes)
  },[])





  return (
    <div style={{ height: "90.9vh", position:"relative" }}>
     {openOptions && <FlowOptions setNodes={setNodes}/> }
     { openOptions ? <RiCloseLargeFill className="absolute ml-8 mt-36 text-gray-500 z-50 cursor-pointer hover:shadow-2xl rounded-full" size={20} onClick={() => setOpenOptions(!openOptions)}/> : <MdAddCircle className="absolute ml-8 mt-1 text-gray-500 z-50 cursor-pointer hover:shadow-2xl rounded-full" size={35} onClick={() => setOpenOptions(!openOptions)}/>
     }
      <ReactFlow
        maxZoom={1.5}
        minZoom={0.9}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onEdgesDelete={onEdgesDelete}
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesDelete={onNodesDelete}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        fitView
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