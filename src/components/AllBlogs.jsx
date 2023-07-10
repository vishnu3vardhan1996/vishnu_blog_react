import React, { useState, useEffect } from 'react';
import { apiURL, reactURL } from "./App";
import { MenuBar } from './MenuBar';
import { Footer } from './Footer';
import "../App.css";

function AllBlogs() {

    const [allBlogs, setAllBlogs] = useState({ allblogFromDB: [] });

    useEffect(() => {
        fetch(`${apiURL}/v1/api/allblogs`)
            .then(res => res.json())
            // .then((data) => setAllBlogs(data))
            .then((data) => {
                // Reverse the array
                const reversedArray = data.allblogFromDB.slice().reverse();
                // Update the state with the reversed array
                setAllBlogs({ allblogFromDB: reversedArray });
            })
            .catch(error => console.log(error));
    }, []);

    // console.log(allBlogs);

    return (
        <div>
            <div>
                <MenuBar />
            </div>


            {allBlogs.allblogFromDB.map(function (blogs, index) {
                return (
                    <div key={index} className="all-blogs">

                        {/* <div className="blog-box"> */}

                        <a className="anchor-tag" href={`${reactURL}/blogs/${blogs.Filename}`}>

                            <p>{blogs.Postdate}</p>

                            <div className="content-wrapper">

                                <h2>{blogs.Heading}</h2>

                                <p className="p-change" dangerouslySetInnerHTML={{ __html: blogs.Paragraph.slice(0, 220) + "..." }}></p>

                            </div>

                        </a>

                        <div className="content-wrapper">

                            <a className="anchor-tag" href={`${reactURL}/blogs/${blogs.Filename}`}>

                                <img className="img-change" src={blogs.Image}></img>

                            </a>

                        </div>

                        {/* </div> */}

                    </div>
                )
            })}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export { AllBlogs };
