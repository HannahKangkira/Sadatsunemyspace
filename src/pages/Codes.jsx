import React from 'react';

const Codes = ({children}) => {
    return (
        <div style={{
            backgroundColor:'rgba(255, 207, 205, 0.8)',
            height:'auto',
            borderRadius:'5px',
            display:'flex',
            gap:'5px',
            maxWidth: '100%',  // 限制最大宽度
            overflow: 'auto',
        }}>
            <div style={{
                backgroundColor:'rgba(188, 71, 77, 0.7)',
                minWidth:'8px'
            }}></div>

            <code style={{
                color:'rgba(188, 71, 77, 1)',
                whiteSpace: 'pre-wrap',  // 保留换行和空格
                wordWrap: 'break-word',  // 超过容器宽度时自动换行
                overflowWrap: 'break-word'
            }}>{children}</code>

        </div>
        
      );
  };
  
  export default Codes;

