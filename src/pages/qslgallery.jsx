import React, { useState,useEffect } from 'react';
import {Grid2, Paper,Pagination,CircularProgress } from '@mui/material';
import './qslgallery.css'
import Title from './Title';

function QSLGallery() {
        const [startEndNum,setStartEndNum] = useState([1,10])
        const [qslData, setQSLData] = useState([])
        const recordsPerPage = 10; // 每页记录数
        const totalRecords = 80; // 总记录数
        const [opacity, setOpacity] = useState(0);
        const [loading,setLoading] = useState(false)
        const totalPages = Math.ceil(totalRecords / recordsPerPage);
    
        useEffect(() => {
          getQSLs()
        }, [startEndNum]);

        
        useEffect(() => {
          let timer;
          if (loading) {
            setOpacity(0); // 重置透明度为 0
            timer = setTimeout(() => {
              setOpacity(1); // 在 25 秒后设置透明度为 1
            }, 25000); // 25 秒
          }
          return () => clearTimeout(timer); // 清理计时器
        }, [loading]); // 监听 loading 状态

        const getQSLs = async () => {
          setLoading(true); // 开始加载
          try {
              const formData = new URLSearchParams();
              formData.append('start', startEndNum[0]);
              formData.append('end', startEndNum[1]);

              const res = await fetch('https://api.sadatsunemyspace.uk/api/getqsls', {
                  method: 'POST',
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: formData.toString()
              });

              const { data } = await res.json();
              setQSLData(data);
          } catch (error) {
              console.error("Error fetching QSL pictures:", error);
          } finally {
              setLoading(false); // 加载完成
          }
      };

        const handlePageChange = (event, page) => {
            // 根据页码计算起始和结束编号
            const start = (page - 1) * recordsPerPage + 1;
            const end = Math.min(page * recordsPerPage, totalRecords); // 确保结束编号不超过总记录数
            setStartEndNum([start, end]);
        };
        
    return (
    <div>
        <Title title={'QSL Gallery'}></Title>
        <p className='nekopara'>
            Here listed some QSL cards or letters I collected since 2016. Not all QSLs listed here because I usually gets 50-60 QSLs each year. That's a great job
            for me to digitalize all QSL card and manage a database for them.
        </p>

        <Grid2 container spacing={'2vw'}>
        {loading ? (
          <center style={{width:'100%'}}>
            <CircularProgress sx={{color:'rgba(59,90,155 ,1)'}}></CircularProgress>
            <p style={{ fontFamily: 'comicbold', fontSize: 'x-large',color:'gray' }}>Loading QSL pictures...</p>
            <p style={{ fontFamily: 'comicregular', fontSize: 'large',color:'gray',opacity:opacity,transition:'opacity 1s'}}>It may take about a minute to be loaded, Please wait...</p>
          </center>
        ) : (
          qslData.length > 0 ? (
            qslData.map((qsl, index) => (
              <Grid2 item xs={6} sm={4} md={3} key={index}>
                <Paper className='qslcontainer' elevation={5}>
                  <img className='qslpic' src={`data:image/png;base64,${qsl.dataside}`} alt={`QSL ${index}`} />
                  <img className='qslpic' src={`data:image/png;base64,${qsl.backside}`} alt={`QSL ${index}`} />
                  <center>
                    <p style={{fontFamily:'comicbold'}}>Station name:<br />{qsl.name}</p>
                  </center>
                </Paper>
              </Grid2>
            ))
          ) : (
            <center style={{width:'100%'}}>
              <p style={{ fontFamily: 'comicbold', fontSize: 'x-large' }}>No QSL pictures available.</p>
              <p style={{ fontFamily: 'comicbold', fontSize: 'large',color:'gray' }}>
                Reasons:
                <br></br>
                · Network error
                <br></br>
                · Database error
                <br></br>
                Please wait and try again. If problem not solved, please email to us. Many thanks.
              </p>
            </center>
          )
        )}        

      </Grid2>
      <center>
        <Pagination
          className='pagina'
          count={totalPages} 
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
          sx={{
            '& .MuiPagination-ul': {
              justifyContent: 'center',
            },
            '& .MuiPaginationItem-root': {
              fontSize: {
                xs: '0.6rem',
                sm: '0.8rem',
              },
              minWidth: {
                xs: '24px',
                sm: '28px',
              },
              height: {
                xs: '24px',
                sm: '28px',
              },
              padding: {
                xs: '2px',
                sm: '4px',
              },
            },
          }}
        />
      </center>
    
    </div>
    
  );
}

export default QSLGallery;
