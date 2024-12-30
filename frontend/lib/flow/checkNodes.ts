import { useReactFlow } from "@xyflow/react";

export const checkNode = (id:string) => {
    const {getNodes} = useReactFlow() 
    const {getEdges} = useReactFlow()

    
    const node = getNodes()
    const edge = getEdges()
    
    console.log("edges",edge)
    console.log("edges",node)

    const inputNodeId = node
  .find(node => node.type === "inputNode")

  const outputNodeId = node.find(node => node.type === "outputNode")

    console.log("inputNode id",inputNodeId)
    console.log("outputNode id",outputNodeId)

    const connected = edge.some(edge => edge.source === inputNodeId?.id && edge.target === outputNodeId?.id)
    console.log(connected)
}