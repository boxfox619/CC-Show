import React from 'react';

class Moon extends React.Component{
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={this.props.asset.width} height={this.props.asset.height} viewBox="0 0 19.000000 20.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.15, written by Peter Selinger 2001-2017
           </metadata>
           <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
           fill={this.props.asset.style['background-color']} stroke={this.props.asset.style['border-color']} stroke-width={this.props.asset.style['border-width']}>
           <path d="M99 174 c12 -15 21 -37 21 -49 0 -38 -37 -75 -75 -75 -40 0 -39 -20 1 -39 67 -30 144 17 144 89 0 49 -49 100 -96 100 -12 0 -11 -5 5 -26z"/>
           </g>
           </svg>
            
        )
    }
} 

export default Moon;