import './styles/Home.css';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <div className='main'>
            <h1 className="nameTitle">Mathieu Girard</h1>
            <img className='profile' 
                src={require('../assets/profilePic2.JPG')}  
                alt="profile pic"/>
            <TypeAnimation
                sequence={[
                    "Software Engineer",
                    1000,
                    "Frontend Developer",
                    1000,
                    "Data Engineer",
                    1000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '50px', color: '#4fc18d' }}
            />
            <p className='desc'>
               Hi, I'm Mathieu Girard a recent Software Engineering graduate from 
               the University of Western Ontario. I have previously held roles as 
               a software engineer, developer and data engineer in the banking industry.
               I'm a hungry up and comer looking to make an impact through software development.
            </p>
            <div class="fontContainer">
                <a href="https://github.com/MathieuGirard19"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
                <a href="https://www.linkedin.com/in/mathieugirard1997/"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
                <a href=""><FontAwesomeIcon icon={faEnvelope} size="3x"/></a>
            </div>
        </div>
    );
  }
  
  export default Home;