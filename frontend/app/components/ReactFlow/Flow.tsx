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
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import FlowOptions from "./FlowOptions";
import InputNode from "./nodes/InputNode";
import OutputNode from "./nodes/OutputNode";
import TextNode from "./nodes/TextNode";
import { DnDProvider, useDnD } from './DnDContext';

 function Flow() {


  const nodeTypes = useMemo(() =>({
    inputNode:InputNode,
    outputNode:OutputNode,
    textNode:TextNode
  }),[])

 
 

  
  
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [openOptions, setOpenOptions] = useState<boolean>(false)

  // Handle new connections between nodes
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
   


  return (
    <div style={{  height: "90.9vh" }}>
     {openOptions && <FlowOptions setNodes={setNodes}/> }
     { openOptions ? <RiCloseLargeFill className="absolute ml-8 mt-36 text-gray-500 z-50 cursor-pointer hover:shadow-2xl rounded-full" size={20} onClick={() => setOpenOptions(!openOptions)}/> : <MdAddCircle className="absolute ml-8 mt-1 text-gray-500 z-50 cursor-pointer hover:shadow-2xl rounded-full" size={35} onClick={() => setOpenOptions(!openOptions)}/>
     }
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls position="bottom-center" style={{marginLeft:"300px", marginBottom:"30px"}} />
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