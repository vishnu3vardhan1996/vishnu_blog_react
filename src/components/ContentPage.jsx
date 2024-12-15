import React from 'react';
import contentPage from "../images/content_page_image.svg";

function ContentPage() {
    return(
        <div className="content-page">
                    <div className="text-primary chaseMessage">
                        <h1>IT'S TIME
                        TO BE HEALTHY
                         AND IN 
                         GREAT SHAPE</h1>
                    </div>
                    <div className="contentImage">
                        <img src={contentPage} alt="content page image" style={{paddingRight: "20%"}} />
                    </div>
        </div>
    )
}

export { ContentPage };