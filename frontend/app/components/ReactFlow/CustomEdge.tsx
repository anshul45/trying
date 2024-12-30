import { BaseEdge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath, useReactFlow } from "@xyflow/react";
import { MdClose } from "react-icons/md";

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY, selected,
  sourcePosition,
  targetPosition,
}:EdgeProps) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const { deleteElements } = useReactFlow();



  if(selected) {
    deleteElements({edges:[{id}]})
  }



  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: selected ? "red" : '#7A7DF3',
          strokeWidth: 2,
        }}
        
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            left: labelX,
            top: labelY,
            transform: "translate(-50%, -50%)",
            padding: "2px 2px",
            borderRadius: "100%",
            fontSize: "12px",
            backgroundColor: "white",
            border: `1px solid ${selected ? "red" : '#7A7DF3'}`,
            color: selected ? "red" : '#7A7DF3'
          }}
        >
          <MdClose />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
