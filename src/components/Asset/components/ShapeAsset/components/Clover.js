import React from 'react';

const propTypes = {
  attrs: React.PropTypes.object.isRequired
}
class Clover extends React.Component{
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={this.props.attrs.width} height={this.props.attrs.height} viewBox="0 0 20.000000 20.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.15, written by Peter Selinger 2001-2017
           </metadata>
           <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
           fill={this.props.attrs.style['background-color']} stroke={this.props.attrs.style['border-color']} strokeWidth={this.props.attrs.style['border-width']}>
           <path d="M60 185 c-6 -8 -9 -22 -6 -33 5 -14 1 -18 -15 -18 -30 1 -46 -26 -33 -61 11 -34 47 -42 75 -17 18 17 20 16 43 -5 42 -40 87 -5 72 55 -5 17 -13 24 -30 24 -20 0 -22 4 -18 26 3 16 -1 30 -9 35 -22 14 -65 11 -79 -6z"/>
           </g>
           </svg>
        )
    }
}

export default Clover;
