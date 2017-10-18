import React from 'react';

class Hexagon extends React.Component{
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={this.props.asset.width} height={this.props.asset.height} viewBox="0 0 23.000000 20.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.15, written by Peter Selinger 2001-2017
           </metadata>
           <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
           fill={this.props.asset.style['background-color']} stroke={this.props.asset.style['border-color']} stroke-width={this.props.asset.style['border-width']}>
           <path d="M28 150 l-28 -50 28 -50 27 -50 60 0 60 0 27 50 28 50 -28 50 -27 50 -60 0 -60 0 -27 -50z"/>
           </g>
           </svg>
            
        )
    }
} 

export default Hexagon;