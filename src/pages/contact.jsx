import './contact.css'
import Title from './Title';

function Contact(){

    return(
       <div>
            <Title title={'Contact'}></Title>
            <p className='nekopara'>
                If you have any suggestions and questions, please mail to:
                <br></br>
                admin@sadatsunemyspace.uk
            </p>
            <p className='nekopara'>
                Only accept pictures and audio attachments, other files will not be viewed.
            </p>
            
       </div>
    );
    
}

export default Contact;