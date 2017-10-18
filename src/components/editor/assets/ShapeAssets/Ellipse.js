import React from 'react';

class Ellipse extends React.Component{
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={this.props.asset.width} height={this.props.asset.height} viewBox="0 0 20.000000 20.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.14, written by Peter Selinger 2001-2017
           </metadata>
           <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
           fill={this.props.asset.style['background-color']} stroke={this.props.asset.style['border-color']} stroke-width={this.props.asset.style['border-width']}>
           <path d="M51 186 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124 -149 87z"/>
           </g>
           </svg>
        )
    }
} 

export default Ellipse;