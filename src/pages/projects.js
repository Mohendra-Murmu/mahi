import React, { useEffect } from 'react'
import { ExternalLink } from 'react-external-link';

export default function Projects() {
    useEffect(() => {
            document.title = 'Projects - Mohendra Murmu';
        }, []);

        
    return (<>
    
         <section className="work section" id="work">
                <h2 className="section-title">Work</h2>

                <div className="work__container bd-grid">
                    <ExternalLink href="https://clone-fa48c.firebaseapp.com/">
                    <div className="work__img">                        
                             <img src="https://firebasestorage.googleapis.com/v0/b/instagram-clone016.appspot.com/o/images%2Famazon-clone.jpg?alt=media&token=91d12bf5-43a3-419b-91a8-1f6b68c06483"
                         alt="" />   
                         <div className="work__title">Amazon React App</div>
                    </div>
                    </ExternalLink>
                    <ExternalLink href='https://instagram-clone016.firebaseapp.com'>
                    <div className="work__img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/instagram-clone016.appspot.com/o/images%2Finstagram.png?alt=media&token=7cce4a49-f657-4d57-bbd1-02ea4e3f9ed9"
                         alt="" />
                         <div className="work__title">Instagram React App</div>
                    </div>                    
                    </ExternalLink>
                    <ExternalLink href='https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40darlin_g/weathernow-eda4267800e04877bfc01b375e08337a-signed.apk'>
                    <div className="work__img">
                        <img src="./weather-now.png"
                         alt=""
                         height="150px" />
                         <div className="work__title">React Native Weather App</div>
                    </div>                    
                    </ExternalLink>
                    <ExternalLink href='https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40darlin_g/Connect-with-People-98af0121ba1d490c9741bfffe711534f-signed.apk'>
                    <div className="work__img">
                        <img src="./connection.jpg"
                         alt=""
                         height="50px" />
                         <div className="work__title">React Native Weather App</div>
                    </div>                    
                    </ExternalLink>
                </div>
            </section>
            </>
    )
}

