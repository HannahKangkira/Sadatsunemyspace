import React, { useState,useEffect } from 'react';
import {Grid2, Paper,Pagination,CircularProgress } from '@mui/material';
import './postalstamps.css'
import Title from './Title';
function PostalStamps() {
        const [startEndNum,setStartEndNum] = useState([1,40])
        const [stampsData, setStampsData] = useState([])
        const recordsPerPage = 40; // 每页记录数
        const totalRecords = 321; // 总记录数
        const [opacity,setOpacity] = useState(0)
        const [loading, setLoading] = useState(false)
        const totalPages = Math.ceil(totalRecords / recordsPerPage);
    
        useEffect(() => {
            getStamps()
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

        const getStamps = async () => {
            setLoading(true); // 开始加载
            try {
                const formData = new URLSearchParams();
                formData.append('start', startEndNum[0]);
                formData.append('end', startEndNum[1]);

                const res = await fetch('https://api.sadatsunemyspace.uk/api/getstamps', {
                    method: 'POST',
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: formData.toString()
                });

                const { data } = await res.json();
                setStampsData(data);
            } catch (error) {
                console.error("Error fetching stamps:", error);
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
        <Title title={'Postal Stamps Library'}></Title>
        <p className='nekopara'>
            Chinese Postal datestamps I collected as follows. All these datestamps are on the mails such as postcards and letters. 
        </p>
        <p className='nekopara'>
            Upper ring of a postal stamp: name of the place where post office be in. For most of situations, the place name consists province name and city's / county's name. Such as 广东(prov.)东莞(city)(Guangdong Dongguan) or 四川(prov.)小金(county) (Sichuan Xiaojin).
            Here's a set of rules covers most of situations.
            <br></br>
            Post offices in districts of a prefectural level cities.
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;Province's name plus city's name.
            <br></br>
            Post offices in districts of a capital city of a province.
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;Only city's name presented.
            <br></br>
            Post offices in counties (including county-level cities).
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;Province's name plus county's name.
        </p>
        <p className='nekopara'>
            All the place names, Chinese words in upper ring and lower ring of the postal stamps were not translated.
        </p>
        <Grid2 container spacing={'2vw'}>
        {loading ? (
          <center style={{width:'100%'}}>
            <CircularProgress sx={{color:'rgba(59,90,155 ,1)'}}></CircularProgress>
            <p style={{ fontFamily: 'comicbold', fontSize: 'x-large',color:'gray' }}>Loading stamps...</p>
            <p style={{ fontFamily: 'comicregular', fontSize: 'large',color:'gray',opacity:opacity,transition:'opacity 1s'}}>It may take about a minute to be loaded, Please wait...</p>
          </center>
        ) : (
          stampsData.length > 0 ? (
            stampsData.map((stamp, index) => (
              <Grid2 item xs={6} sm={4} md={3} key={index}>
                <Paper className='piccontainer'>
                  <img className='stamppic' src={`data:image/png;base64,${stamp.image}`} alt={`Stamp ${index}`} />
                  <p className='stampdescription'>Place:<br />{stamp.prov}{stamp.city}<br />Name of stamp:<br />{stamp.name}</p>
                </Paper>
              </Grid2>
              
            ))
          ) : (
            <center>
              <p style={{ fontFamily: 'comicbold', fontSize: 'x-large' }}>No stamps available.</p>
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

export default PostalStamps;
