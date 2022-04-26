import React,{ useState } from 'react';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { Stage, Layer, Rect, Circle} from 'react-konva';

function App() {
  const [color,setColor] = useState('cyan');
  return (
    
    <DndProvider backend={HTML5Backend}>
      <div className="App">
      
        <div style={{ "margin": "20px"}}>
            <h3>Select the transition color in the dropdown</h3>

            <select onChange={(e) => setColor(e.target.value)}>
                <option value="cyan">Cyan</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
            </select>
        </div>
        <div>  
          <Stage width={window.innerWidth} height={window.innerHeight}>
              
                <Layer>

                    <Rect
                    x={500}
                    y={50}
                    width={100}
                    height={100}
                    draggable
                    fill="black"
                    shadowBlur={10}
                    onDragStart={(e,id) => {
                        e.target.attrs.fill = color
              
                    }}
                    onDragEnd={(e) => {
                        e.target.attrs.fill = 'black' 

                    }}
                    />
                    <Rect
                    x={700}
                    y={50}
                    width={100}
                    height={50}
                    draggable
                    fill="silver"
                    shadowBlur={10}
                    onDragStart={(e) => {
                        e.target.attrs.fill = color
              
                    }}
                    onDragEnd={(e) => {
                        e.target.attrs.fill = 'silver'            
                    }}
                    />
                    <Circle x={900} y={100} radius={50} fill="magenta"  draggable
                    onDragStart={(e) => {
                        e.target.attrs.fill = color
                    }}
                    onDragEnd={(e) => {
                        e.target.attrs.fill = 'magenta'            
                    }}

                    />

                </Layer>
          </Stage>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
