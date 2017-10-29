import React from 'react';

class RoundSquare extends React.Component{
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={this.props.asset.width} height={this.props.asset.height} viewBox="0 0 20.000000 20.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.15, written by Peter Selinger 2001-2017
           </metadata>
           <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
           fill={this.props.asset.style['background-color']} stroke={this.props.asset.style['border-color']} strokeWidth={this.props.asset.style['border-width']}>
           <path d="M12 188 c-16 -16 -16 -160 0 -176 7 -7 42 -12 88 -12 46 0 81 5 88 12 16 16 16 160 0 176 -16 16 -160 16 -176 0z"/>
           </g>
           </svg> 
        )
    }
} 

export default RoundSquare;