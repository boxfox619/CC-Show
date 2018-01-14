import React from 'react';

const propTypes = {
  attrs: React.PropTypes.object.isRequired
}
class Pentagon extends React.Component{
    render() {
        return (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width={this.props.attrs.width} height={this.props.attrs.height} viewBox="0 0 21.000000 20.000000"
            preserveAspectRatio="xMidYMid meet">
           <metadata>
           Created by potrace 1.14, written by Peter Selinger 2001-2017
           </metadata>
           <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
           fill={this.props.attrs.style['background-color']} stroke={this.props.attrs.style['border-color']} strokeWidth={this.props.attrs.style['border-width']}>
           <path d="M54 163 c-27 -20 -50 -37 -51 -38 -2 -1 7 -30 18 -64 l21 -62 66 3 66 3 13 44 c7 24 15 52 18 61 5 16 -16 34 -91 82 -7 4 -33 -8 -60 -29z"/>
           </g>
           </svg>

        )
    }
}

export default Pentagon;
