import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


export default function About() {
      const classes = useStyles();
    useEffect(() => {
            document.title = 'About - Mohendra Murmu';
        }, []);

    return (<>       
        <section className="about section " id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.6435-9/50955180_1328367093968590_9006124791362486272_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=azRjXHeTjZ8AX-p6byP&_nc_ht=scontent.fbbi1-2.fna&oh=f31c3227132d99dbd17d374a809993b8&oe=60DAEAD7"
                         alt="Mohendra Murmu" />
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">I'am Mohendra Murmu<br />
                         Designer / Front End Developer.
                        </h2>
                        <p className="about__text">
                            I enjoy building everything from small business sites to rich interactive web apps.<br /> 
                            If you are a business seeking a web presene or an employer looking to hire, you can get in touch with me here.
                        </p> 
                        <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<ArrowRightIcon />}
                        component={Link}
                        to="/contact"
                        >
                        I need a website
                        </Button>          
                        <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<ArrowRightIcon />}
                        component={Link}
                        to="/contact"
                        >
                        Hire Me
                        </Button>          
                    </div>                                   
                </div>
            </section>
            </>
    )
}

