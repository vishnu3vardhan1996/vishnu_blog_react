import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import App from "./App";
import { apiURL } from './App';
import '../App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }, { 'size': [] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],
        ['link', 'image', 'video'],

        ['clean'],
    ],
};

function WriteBlog() {
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    function handleContent() {

        if ((value.trim() === '') || (value == "<p><br></p>") || (value == "<h1><br></h1>")) {
            alert('Please fill in the content');
            return;
        }

        const heading = document.querySelector('h1');

        let headingDoc;

        if (heading) {
            headingDoc = document.querySelector('h1').innerHTML;
        }
        else {
            alert('Please give <h1> heading for a blog');
            return;
        }

        const paragraphSelector = document.querySelectorAll('p');

        let paraDoc;

        for (let i = 0; i < paragraphSelector.length;) {

            const paraLength = paragraphSelector[i].innerHTML.length;

            // && ((document.querySelectorAll('p')[i].querySelector('img').innerHTML) === 0)

            if ((paraLength > 50)) {

                if (document.querySelectorAll('p')[i].querySelector('img')) {
                    i++;
                }

                else {
                    paraDoc = paragraphSelector[i].innerHTML.substring(0, 220);
                    i = paragraphSelector.length;
                }

            }

            else {
                i++;
            }

        }

        const imageSelector = document.querySelector('img');

        let image;

        if (!imageSelector) {
            image = "";
        }
        else {
            image = document.querySelector('img').getAttribute('src');
        }

        console.log(headingDoc);
        console.log(paraDoc);
        console.log(value);
        console.log(image);
        // console.log(paragraphSelector);

        fetch(`${apiURL}/v1/api/writtenblogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ finalContent: value, heading: headingDoc, paragraph: paraDoc, imageSrc: image })
        })
            .then(res => {
                // Handle the response here
            })
            .catch(err => {
                // Handle the error here
            });

        navigate("/allblogs");
    }

    return (
        <div>
            <div className='content'>
                <ReactQuill
                    theme="snow"
                    placeholder="Tell your story..."
                    value={value}
                    onChange={setValue}
                    modules={modules}
                />
                <button className="centered-button" onClick={handleContent}>Submit</button>
            </div>
        </div>
    );
}

export { WriteBlog };