import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { apiURL, reactURL } from "./App";
import "../App.css";
import ReactQuill from 'react-quill';
import { MenuBar } from './MenuBar';
import { Footer } from "./Footer";
import 'react-quill/dist/quill.bubble.css';

function BlogsAll() {

    const { filename } = useParams();

    // const [myBlog, setMyBlog] = useState({blogFromDB: []});

    const [myBlog, setMyBlog] = useState();

    useEffect(() => {
        fetch(`${apiURL}/v1/api/blogs/${filename}`)
            .then(res => res.json())
            .then((data) => {
                setMyBlog(data.blogFromDB[0].Content);
            })
            .catch(error => console.log(error));
    }, [filename]);

    return (
        <div>

            <MenuBar />

            <div className="content-read-only">

                <ReactQuill
                    theme="bubble"
                    // placeholder="Tell your story..."
                    value={myBlog}
                    readOnly={true}
                    style={{ fontSize: '1.2em' }}
                // onChange={setValue}
                // modules={modules}
                />

            </div>
            <Footer />
        </div>
    )
}

export { BlogsAll };