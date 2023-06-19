import React, { useState, useEffect } from "react";
import { apiURL, reactURL } from "./App";

function ReactNodeConnect() {
    const [nodeValue, setNodeValue] = useState("Hello Vishnu");

    useEffect(() => {
        fetch(`${apiURL}/test`)
        // fetch(process.env.REACT_APP_API_URL)
            .then(res => res.json())
            .then(data => setNodeValue(data))
            .catch(error => console.log(error));
    }, [nodeValue]);

    return(
        <div>
            <h1>
                {nodeValue}
            </h1>
        </div>
    );

}

export {ReactNodeConnect};