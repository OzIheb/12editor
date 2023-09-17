import Konva from 'konva';
import { Stage, Layer, Circle, Line } from 'react-konva';
import React from 'react';




function Canvas(props) {
    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState([]);
    const isDrawing = React.useRef(false);

    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { tool, points: [pos.x, pos.y] }]);

    }

    const handleMouseMove = (e) => {
        // no drawing skipping 
        if (!isDrawing.current) {
            return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        lastLine.points =  lastLine.points.concat([point.x, point.y]);
        lines.splice(lines.length-1,1, lastLine);
        setLines(lines.concat());
    }

    const handleMouseUp = () => {
        isDrawing.current = false;
    }


  return (
  <div className="half-screen bg-white">
    <Stage
    width={window.innerHeight}
    height={window.innerHeight}
    onMouseDown={handleMouseDown}
    onMousemove={handleMouseMove}
    onMouseup={handleMouseUp}
    >
      <Layer>
        {lines.map((line, i) => (
            <Line
                key={i}
                points={line.points}
                stroke="red"
                strokeWidth={2}
                tension={0.5}
                lineCap="round"
                globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
                }
            />
            ))}
      </Layer>
    </Stage>
  </div>
  );
}

export default Canvas;