import React from 'react';

class Octagon extends React.Component{
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={this.props.asset.width} height={this.props.asset.height} viewBox="0 0 20.000000 20.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.15, written by Peter Selinger 2001-2017
           </metadata>
           <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
           fill={this.props.asset.style['background-color']} stroke={this.props.asset.style['border-color']} stroke-width={this.props.asset.style['border-width']}>
           <path d="M27 172 c-38 -40 -38 -104 0 -144 22 -23 35 -28 73 -28 64 0 100 37 100 101 0 63 -37 99 -101 99 -37 0 -50 -5 -72 -28z"/>
           </g>
           </svg>
           
        )
    }
} 

export default Octagon;