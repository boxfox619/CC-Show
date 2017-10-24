import React from 'react';

class Star extends React.Component{
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={this.props.asset.width} height={this.props.asset.height} viewBox="0 0 21.000000 20.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.14, written by Peter Selinger 2001-2017
           </metadata>
           <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
           fill={this.props.asset.style['background-color']} stroke={this.props.asset.style['border-color']} strokeWidth={this.props.asset.style['border-width']}>
           <path d="M85 166 c-13 -20 -30 -32 -48 -34 -32 -4 -34 -13 -6 -37 16 -16 19 -26 14 -57 l-7 -39 34 17 c32 15 37 15 67 -1 l33 -17 -7 39 c-5 32 -2 42 14 58 28 24 26 33 -6 37 -17 2 -35 14 -48 34 l-20 30 -20 -30z"/>
           </g>
           </svg>
           
        )
    }
} 

export default Star;