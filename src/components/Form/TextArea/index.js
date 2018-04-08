import React from 'react';
import classnames from 'classnames';
import styles from './style.css';

const propTypes = {
  onChange: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
    width: React.PropTypes.string.isRequired,
    height: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
}

const defaultProps = {
    className: ''
}

class TextArea extends React.Component{
    constructor(prop){
        super(prop);
    };

    render(){
        return(
            <div className={classnames(styles.cover, this.props.className)} style={{width: this.props.width, height: this.props.height}}>
                <span className={styles.label}>{this.props.label}</span>
                <input type="text" className={styles.text}
                       placeholder={this.props.label + "을 입력하세요"}
                       onChange={(e) => this.onChange(e)}
                       value={this.props.text}/>
            </div>
        );
    }
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;


export default TextArea;
