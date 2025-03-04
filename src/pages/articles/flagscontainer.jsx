import React, { useState, useEffect } from 'react';
import './flagscontainer.css';

const FlagsContainer = () => {

  const colors = ['#0e66cb','#ffffff','#db2424','#24a424','#f5cc27']
  const [flagsPerRow, setFlagsPerRow] = useState(getFlagsPerRow());

  useEffect(() => {
    const handleResize = () => {
      setFlagsPerRow(getFlagsPerRow());
      console.log(flagsPerRow)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log('Flags per row updated:', flagsPerRow); // 打印更新后的值
  }, [flagsPerRow]);
  

  function getFlagsPerRow() {
    const containerWidth = window.innerWidth;
    const flagWidth = 7; // 50px width + 5px gap
    if(containerWidth >= 769){
      return Math.ceil((containerWidth*0.92 - 250) / flagWidth);
    }else if(containerWidth >= 600 && containerWidth <6769){
      return Math.ceil((containerWidth*0.92 - 280) / flagWidth);
    }else{
      return Math.ceil(containerWidth*0.80 / flagWidth);
    }
    
  }

  return (
    <div className="flags-container">
      {Array.from({ length: flagsPerRow }).map((_, index) => (
        <div
          key={index}
          className='flag'
          style={{
            backgroundColor: colors[index % colors.length], // 颜色循环
          }}
        ></div>
      ))}
    </div>
  );
};

export default FlagsContainer;

