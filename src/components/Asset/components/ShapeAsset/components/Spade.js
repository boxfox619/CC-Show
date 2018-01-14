import React from 'react';

const propTypes = {
  attrs: React.PropTypes.object.isRequired
}
class Spade extends React.Component{
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
           <path d="M65 165 c-59 -48 -65 -55 -65 -78 0 -40 57 -76 75 -47 12 19 26 11 15 -9 -15 -28 -13 -31 17 -31 21 0 24 3 15 12 -7 7 -12 18 -12 25 0 11 4 11 20 1 35 -22 78 19 66 63 -5 19 -65 73 -96 86 -3 1 -18 -9 -35 -22z"/>
           </g>
           </svg>
        )
    }
}

export default Spade;
