import React from 'react';

const propTypes = {
  attrs: React.PropTypes.object.isRequired
}
class Triangle extends React.Component{
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="50px" height="50px" viewBox="0 0 23.000000 20.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.14, written by Peter Selinger 2001-2017
           </metadata>
           <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
           fill={this.props.attrs.style['background-color']} stroke={this.props.attrs.style['border-color']} strokeWidth={this.props.attrs.style['border-width']}>
           <path d="M58 102 l-56 -97 54 -3 c29 -2 80 -2 113 0 l59 3 -55 95 c-30 52 -56 96 -57 97 -1 1 -27 -41 -58 -95z"/>
           </g>
           </svg>
        )
    }
}

export default Triangle;
