import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import './MyBlog.css';

export default function Form(props) {
  return (

    <div className="myblog">
      <div className="notice-blog" style={props.theme==="dark"?{background:"#222222",border:"1px solid #393939"}:{background:"#fdf9ff",border:"1px solid #e8dfec"}}>
      <CircularProgress color="secondary" size='5rem'/>
      <p style={props.theme==="dark"?{color: "#e9e9e9"}:{color:"#504e70"}}>
        System is under maintenance, please come back later!
           &nbsp; <FontAwesomeIcon icon={faFrown} size="2x" color={props.btnColor}/>
      </p>
    </div>
    </div>
  );
}