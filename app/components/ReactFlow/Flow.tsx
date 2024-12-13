"use client"
import { useCallback, useState } from "react";
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
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import FlowOptions from "./FlowOptions";

export default function Flow() {
  // Initial state for nodes and edges
  const initialNodes: Node[] = [
    {
      id: "1",
      position: { x: 0, y: 0 },
      data: { label: "Node 1" },
      type: "default",
    },
    {
      id: "2",
      position: { x: 100, y: 100 },
      data: { label: "Node 2" },
      type: "default",
    },
    {
      id:'3',
      position:{x:200,y:200},
      data:{label:'Node 3'}
    }
  ];

  const initialEdges: Edge[] = [
    {
      id: "e1-1",
      source: "1",
      target: "2",
      animated: true,
    },
    {
      id:"e1-2",
      source:"2",
      target:"3",
      animated:true
    }
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [openOptions, setOpenOptions] = useState<boolean>(false)

  // Handle new connections between nodes
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{  height: "90.9vh" }}>
     {openOptions && <FlowOptions/> }
     { openOptions ? <RiCloseLargeFill className="absolute ml-8 mt-36 text-gray-500 z-50 cursor-pointer hover:shadow-2xl rounded-full" size={20} onClick={() => setOpenOptions(!openOptions)}/> : <MdAddCircle className="absolute ml-8 mt-1 text-gray-500 z-50 cursor-pointer hover:shadow-2xl rounded-full" size={35} onClick={() => setOpenOptions(!openOptions)}/>
     }
      <ReactFlow
        nodes={nodes}
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
