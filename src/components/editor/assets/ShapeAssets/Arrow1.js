import React from 'react';

class Arrow1 extends React.Component{
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={this.props.asset.width} height={this.props.asset.height} viewBox="0 0 18.000000 20.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.15, written by Peter Selinger 2001-2017
           </metadata>
           <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
           fill={this.props.asset.style['background-color']} stroke={this.props.asset.style['border-color']} strokeWidth={this.props.asset.style['border-width']}>
           <path d="M45 150 l49 -50 -49 -50 -49 -50 45 0 c41 0 49 5 94 50 l49 50 -49 50 c-45 45 -53 50 -94 50 l-45 0 49 -50z"/>
           </g>
           </svg>
        )
    }
} 

export default Arrow1;