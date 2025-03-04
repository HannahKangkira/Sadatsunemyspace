import './about.css'
import Title from './Title';
import Codes from './Codes'
function About(){

    return(
       <div>
            <Title title={'Facts about this site'}></Title>
            <p className='titlelevel2'>Why build this site?</p>
            <p className='nekopara'>
                I want a highly customized personal blog for demonstrating my QSLs, the postal stamps I collected, also 
                a place for writing something. Wordpress is OK and good. If you adopted Wordpress for your blog, once you want to customize it, you need to learn their set of things,
                the classnames, ids, classes and their logic of their codes. I won't spend time learning that.
            </p>
            <p className='titlelevel2'>How about the development and running of this site?</p>
            <p className='nekopara'>
                The development of this site not based on Wordpress or etc, so I needn't to declare which set of now-available blog plan I use in footer. 
                But I coded whole page myself, using React for frontend, MySQL for database and Python with Flask for lightweight backend, enough for 
                a little page like this.
                <br></br>
                So here I sincerely thanks to all the opensource projects I used and their spirit. Make this site come to reality.
            </p>
            <p className='nekopara'>
                The page running on an old laptop at home.  
            </p>

            <center>
            <div className='picgroup'>
                <div >
                    <img src='/aboutpic/about1.jpg' style={{width:'170px',height:'240px'}}></img>
                    <p className='imagetitle'>Lenovo ThinkPad T410</p>
                </div>
                <div>
                    <img src='/aboutpic/about2.jpg' style={{width:'240px',height:'170px'}}></img>
                    <p className='imagetitle'>WD Green SSD</p>
                </div>
            </div>
            </center>
            <p className='nekopara' style={{color:'gray'}}>
                    Model: Lenovo ThinkPad T410 (produced in 2011).
                    <br></br>
                    · CPU: Intel i5 520M, 2 cores and 4 threads.
                    <br></br>
                    · RAM: 6 GB.
                    <br></br>
                    · Storage: WD Green SSD 120 GB (bought 7 years ago).
            </p>
            <p className='nekopara'>
                Originally I planned to deploy all the service including database on a cloud server. But it only have one core CPU and limited RAM. When inserting data to the database, the server get stucked and usage of CPU soared to 100%.
                It's a free tier so that is resonable. But that still a good idea making this server forwarding the traffic. 
            </p>
            <p className='titlelevel2'>Why you take this set of colour?</p>
            <p className='nekopara'>
                The theme colour is derived from the vTuber named Shigure Ui. I utilized this set of colours in different parts of the website.
                Here is the set of colours I used for css layout and design of this website.
                <Codes>
                    rgba(188, 71, 77, 1), rgba(59, 90, 155 , 1), rgba(255, 207, 205, 1), rgba(163, 120, 121 ,1)
                </Codes>
            </p>
            <p className='titlelevel2'>Why there's a roadsign at the footer of the page?</p>
            <p className='nekopara'>
                The blue backgrounded road sign is common in streets and roads in China. I collected all names of roads in Lanzhou, Gansu Province. Extracted the attributes table of the 
                road .shp file downloaded from OpenStreetMap. When the website opened the roadsign and its name in footer will refreshed to change.
                <br></br>
                Also, this could used as an indicator of the connection between your device and our server. When connection is interrupted, the roadsign is unable to load.
            </p>
            <p className='titlelevel2'>Any thing else?</p>
            <p className='nekopara'>
                When loading the QSL gallery and postal stamps. It may take a long time because these pictures are pulling from database and encoded with base64 format. The
                merit is I can manage pictures by batch automaticly.
            </p>
            <p className='titlelevel2'>Image credits</p>
            <p className='nekopara'>
                Avatar in header: Shigure Ui.
                <br></br>
                Map in header: U.S. Army Map Service. Map number NK52-7.
            </p>
           
       </div>
    );
    
}

export default About;