import React from 'react';

const propTypes = {
  attrs: React.PropTypes.object.isRequired
}
class Stain extends React.Component{
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
           <path d="M84 188 c-5 -7 -7 -25 -5 -40 3 -31 -1 -33 -28 -16 -10 6 -26 8 -355 -23 -9 -16 -41 9 -45 46 -7 49 -11 25 -37 -24 -25 -22 -55 4 -55 9 0 23 14 32 31 16 32 29 30 36 -6 4 -25 36 -32 44 -10 4 10 -2 26 -16 40 -24 26 -21 30 25 37 25 4 32 36 9 45 -9 3 -25 1 -35 -5 -26 -17 -27 -16 -31 25 -3 38 -20 54-34 31z"/>
           </g>
           </svg>

        )
    }
}

export default Stain;
