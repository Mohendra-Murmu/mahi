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
                    </div>
                    </ExternalLink>
                    <ExternalLink href='https://instagram-clone016.firebaseapp.com'>
                    <div className="work__img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/instagram-clone016.appspot.com/o/images%2Finstagram.png?alt=media&token=7cce4a49-f657-4d57-bbd1-02ea4e3f9ed9"
                         alt="" />
                    </div>                    
                    </ExternalLink>
                </div>
            </section>
            </>
    )
}

