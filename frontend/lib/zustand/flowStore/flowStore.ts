import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges } from '@xyflow/react';

import { type FlowState } from './types';
 
const flowStore = create<FlowState>((set, get) => ({
  nodes: [],
  edges: [],
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge({ ...connection, type: 'edge1' }, get().edges),
    });
  },
  //@ts-ignore
  setNodes: (id:string, position:any, type:string, data:any) => {
    set((state) => ({
      nodes: [
        ...state.nodes,
        { id, position, type, data },
      ],
    }));
  },
  setEdges: (edges) => {
    set({ edges });
  },
}));
 
export default flowStore;