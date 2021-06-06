import  { useEffect } from 'react';
import { ExternalLink } from 'react-external-link';
import './home.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Button} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import {Link} from 'react-router-dom';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import Typical from "react-typical";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
    useEffect(() => {
            document.title = 'Home - Mohendra Murmu';
        }, []);

        
    return (<>           
        <ScrollToTop smooth color="#0e2431" />       
        <section className="home bd-grid" id="home">            
                <div className="home__data">                    
                    <h1 className="home__title">Hi,
                    <br />
                   I'am
                    <span className="home__title-color">
                        <Typical
                        steps={['Mohendra Murmu', 500]}
                        loop={Infinity}
                        wrapper="p"
                    />                        
                        </span>
                    <br />
                    <Typical
                        steps={['Interactive', 700, 'Front-End Developer', 100]}
                        loop={Infinity}
                        wrapper="p"
                    />  
                    </h1>
                    <div className="contact__button__home">
                    <Button
                        variant="contained"
                        color="primary"
                        className="button"
                        endIcon={<EmailIcon />}
                        component={Link}
                        to="/contact"
                        >
                        Send Me An Email
                        </Button>
                        <TrendingFlatIcon className="contact__arrow__icon" fontSize="large"/>
                    </div>
                </div>

                <div className="home__social">                    
                    <ExternalLink href='https://www.linkedin.com/in/mohendra-murmu/' className="home__social-icon">
                        <LinkedInIcon></LinkedInIcon>
                    </ExternalLink>
                    <ExternalLink href="https://facebook.com/mahendradipu" className="home__social-icon">
                        <FacebookIcon></FacebookIcon>
                    </ExternalLink>
                    <ExternalLink href="https://github.com/Mahendramurmu" className="home__social-icon">
                        <GitHubIcon></GitHubIcon>
                    </ExternalLink>
                </div>

              


                <div className="home__img">    
                    
                </div>
            </section>
            
            <About />
            <Skills />
            <Projects />
            <Contact />
              <footer className="footer">
            <p className="footer__title">Mahi</p>
            <div className="footer__social">
                <ExternalLink href="https://facebook.com/mahendradipu" className="footer__icon"><FacebookIcon></FacebookIcon></ExternalLink>
                <ExternalLink href="https://github.com/Mahendramurmu" className="footer__icon"><GitHubIcon></GitHubIcon></ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/mohendra-murmu/" className="footer__icon"><LinkedInIcon></LinkedInIcon></ExternalLink>
            </div>
            <p>&#169; 2020 copyright all right reserved</p>
        </footer>
        
        </>
    )
}

