import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleProject = () => {
    const {id}= useParams()

    const [projectOne, setProjectOne]= useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/project/${id}`)
        .then(res=> res.json())
        .then(data => setProjectOne(data));

    },{})
    return (
        <div>
            <h3>{projectOne.projectName}</h3>
        </div>
    );
};

export default SingleProject;