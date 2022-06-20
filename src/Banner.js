import React from 'react';
import './Banner.css';

function Banner() {
    return (
      <div>
       <div className="banner">
           <div className="banner__contents">
               <h1 className="banner__title">
                   The little Things
               </h1>
              <h1 className="banner__description">
              Set in early 1990s Los Angeles, the film follows detectives (Denzel Washington and Rami Malek) who investigate a string of murders, which lead them to a strange loner who may be the culprit (Jared Leto).
              </h1>
              <div className="banner__buttons">
                   <button
                     className="banner__button">
                     Play
                   </button>
                   <button className="banner__button">
                     My List 
                   </button>
               </div>
           </div>
         <div className="banner--fadeBottom"/>
       </div>
      </div>
    )
}

export default Banner
