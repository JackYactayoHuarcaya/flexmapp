import { Handle, Position } from "@xyflow/react";

type typeSection = {
  id: string;
  data: {
    label: string;
    source: string;
    labelTitle: string;
    descripcion?: string;
  };
};

export const Section = ({ id, data }: typeSection) => {
  return (
    <div
      className={`cursor-default fonttilt ${
        data?.descripcion ? "bg-[var(--bttn)] rounded" : ""
      } `}
      key={id + "-" + data.label}
    >
      <p className="p-4 text-center">{data.label}</p>
      <Handle
        type="target"
        id="1"
        position={Position.Top}
        isConnectable={true}
      />
      <Handle
        type="target"
        id="2"
        position={Position.Bottom}
        isConnectable={true}
      />
      <Handle
        type="target"
        id="3"
        position={Position.Right}
        isConnectable={true}
      />
      <Handle
        type="target"
        id="4"
        position={Position.Left}
        isConnectable={true}
      />
      <Handle
        type="source"
        id="1"
        position={Position.Top}
        isConnectable={true}
      />
      <Handle
        type="source"
        id="2"
        position={Position.Bottom}
        isConnectable={true}
      />
      <Handle
        type="source"
        id="3"
        position={Position.Right}
        isConnectable={true}
      />
      <Handle
        type="source"
        id="4"
        position={Position.Left}
        isConnectable={true}
      />
    </div>
  );
};
