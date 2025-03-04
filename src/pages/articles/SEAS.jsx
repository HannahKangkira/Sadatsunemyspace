import React from 'react';
import Pagefoot from '../Pagefoot';
import Codes from '../Codes';

function SEAS() {

    return (
    <div>
        <center>
        <p className='articletitle'>Sending Emails Using Automatic Script</p>
        </center>
        <hr className='divideline'></hr>
        <p>
        Here we use mail.ru smtp server. If you don’t have mail.ru account you can register one online.
        </p>
        <p >
        We want to send an email using their service. Undoubtedly, we need an account, password, SMTP server, port number and encrypt method as well. Here provided some basic information.
        </p>
        <Codes>
            SMTP server: smtp.mail.ru
            <br/>
            Port: 587(for TLS encryption, same as other mainstream mail servers)
        </Codes>
        <p >
        Different email service providers will have different settings. Usually you can found these information in mailbox’s settings.
        </p>
        <p >
        Recently many email service providers made a division on your account and other external apps. Means you need to generate a dedicated password for external apps use only. Here follow the steps to get a password for our script.
        </p>
        <p >
        Login to https://id.mail.ru/security and you will find Sign-in options followed Passwords for external apps. Remember your telephone number will be verified when creating the password.
        </p>
        <center>
            <img  className='pic1' src='\seaspic\pic1.png' alt='security panel' loading='lazy'style={{
                width:'90%',
                maxWidth:'400px',
                maxHeight:'230px'
            }}></img>
            <p className='imagetitle'>Security panel of mail.ru.</p>
        </center>
        <p >
        When you complete procedures you will see this in the picture below.
        </p>
        <center>
            <img  className='pic1' src='\seaspic\pic2.png' loading='lazy' alt='complete' style={{
                
                maxWidth:'400px',
                maxHeight:'230px'
            }}></img>
            <p className='imagetitle'>Setting Complete of dedicated passwords.</p>
        </center>
        <p >
        Now fill this script below after you get all information you need.
        </p>
        <Codes>
        import smtplib
        <br/>
        from email.mime.text import MIMEText
        <br/>
        from email.mime.multipart import MIMEMultipart
        <br/>
        # configs
        <br/>
        email_sender = "example@mail.ru"  # Email address of the sender
        <br/>
        email_receiver = "example@gmail.com"  # Email address of the receiver
        <br/>
        smtp_server = "smtp.mail.ru"  # Your SMTP server address
        <br/>
        smtp_port = 587  # SMTP Port
        <br/>
        smtp_username = "example@mail.ru"  # For mail.ru please enter your full email.
        <br/>
        smtp_password = "exampleexample"  # Your password for external apps
        <br/>
        def send_email():
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;msg = MIMEMultipart()
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;msg["From"] = email_sender
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;msg["To"] = email_receiver
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;msg["Subject"] = "Test email"
            <br/>

            &nbsp;&nbsp;&nbsp;&nbsp;body = "test" # Here is the content of your email.
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;msg.attach(MIMEText(body, "plain"))
            <br/>

            &nbsp;&nbsp;&nbsp;&nbsp;try:
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Connect to SMTP server and send the email.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with smtplib.SMTP(smtp_server, smtp_port) as server:
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;server.starttls()  # TLS encryption enabled
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;server.login(smtp_username, smtp_password)  # Logging to SMTP server
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;server.sendmail(email_sender, email_receiver, msg.as_string())  # Send email
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Successful!")
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;except Exception as e:
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"Failed!: {'{'}e{'}'})
                <br/>

        if __name__ == "__main__":
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;send_email()

        </Codes>
        <p >
        This functionality can be intergrated to other usages such as monitor a site open or not. Once the site opened, the script will send you an email.
        </p>
        <Pagefoot towhere={'/others'} date={'15 Feb 2025'}/>
    </div>
    
  );
}

export default SEAS;
