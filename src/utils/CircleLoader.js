import React from 'react';
import {motion} from 'framer-motion';

const containerStyle={
    position:'relative',
    with:'3rem',
    height:'3rem'
};
const circleStyle = {
    display:'block',
    with:'3rem',
    height:'3rem',
    border:'0,5rem solid #d3761b',
    borderTop:'0,5rem solid #d37567',
    borderRadius:'50%',
    position:'absolute',
    boxSizing:'border-box',
    top:0,
    left:0
};

const spinTransition = {
    loop:Infinity,
    duration:1,
    ease:'linear'
}

export const CircleLoader=()=>{
    return(<div style={containerStyle}>
    <motion.span style={circleStyle} animate={{rotate:360}} transition={spinTransition}/>
    </div>);
}