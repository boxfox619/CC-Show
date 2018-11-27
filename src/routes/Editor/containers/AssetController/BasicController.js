import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ControllerWrapper from 'components/ControllerWrapper';
import InputControllerItem from 'components/InputControllerItem';


const getPixel = (e) => {
    let val = e.target.value;
    if (!val || val.length === 0) {
        val = 0;
    }
    return val + 'px';
};

export default class BasicController extends React.Component {
    static propTypes = {
        onChangeAttribute: PropTypes.func.isRequired,
        onChangeStyle: PropTypes.func.isRequired,
        showColorPicker: PropTypes.func.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        angle: PropTypes.number.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        borderColor: PropTypes.string.isRequired,
        borderWidth: PropTypes.number.isRequired,
        style: PropTypes.object.isRequired
    };

    static defaultProps = {
        width: 50,
        height: 50,
        x: 0,
        y: 0,
        angle: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        style: {}
    };

    constructor(prop) {
        super(prop);
        this.state = {
            attribute: true,
            shape: true,
            style: true,
        };
    }

    render = () => {
        return (
            <div>
                <ControllerWrapper title={'속성'}>
                    <div className={styles['controller-container']}>
                        <div>
                            <InputControllerItem title={'H :'} onChange={this.setHeight} value={this.props.height}/>
                            <InputControllerItem title={'W :'} onChange={this.setWidth} value={this.props.width}/>
                        </div>
                        <div>
                            <InputControllerItem title={'X :'} onChange={this.setX_location} value={this.props.x}/>
                            <InputControllerItem title={'Y :'} onChange={this.setY_location} value={this.props.y}/>
                        </div>
                        <InputControllerItem title={'A :'} onChange={this.setAngle} value={this.props.angle}/>
                    </div>
                </ControllerWrapper>

                <ControllerWrapper title={'도형'}>
                    <div className={styles['controller-container']}>
                        <div className={styles['controller']}>
                            <span className={styles['title']}><img src={"/images/ic_color.png"}/></span>
                            <div className={styles["color-picker"]}
                                 onClick={this.backgroundColorClickHandler}
                                 style={this.props.backgroundColor === 'white' ? {border: '1px solid #5D87B5'} : {backgroundColor: this.props.backgroundColor}}
                            />
                        </div>
                        <div className={styles['controller']}>
                            <span className={styles['title']}><img src={"/images/ic_line.png"}/></span>
                            <div className={styles.attribute_both_input_area}>
                                <div className={styles["color-picker"]}
                                     onClick={this.borderColorClickHandler}
                                     style={this.props.borderColor === 'white' ? {border: '1px solid #5D87B5'} : {backgroundColor: this.props.borderColor}}
                                />
                                <input className={styles['input']}
                                       onChange={this.setBorderWidth}
                                       type={"text"}
                                       value={this.props.borderWidth}
                                />
                            </div>
                        </div>
                    </div>
                </ControllerWrapper>

                <ControllerWrapper title={'스타일'}>
                    <div className={styles['controller-container']}>
                        <div id={styles['css-editor']}>
                            <textarea onChange={this.setStyle} defaultValue={this.getStyle()}/>
                        </div>
                    </div>
                </ControllerWrapper>
            </div>
        )
    }

    setHeight = (event) => {
        let val = getPixel(event);
        this.props.onChangeAttribute('height', val);
    }

    setWidth = (event) => {
        let val = getPixel(event);
        this.props.onChangeAttribute('width', val);
    }

    setX_location = (event) => {
        let val = getPixel(event);
        this.props.onChangeAttribute('x', val);
    }

    setY_location = (event) => {
        let val = getPixel(event);
        this.props.onChangeAttribute('y', val);
    }

    getStyle = () => {
        let style = this.props.style;
        let styleMap = '';
        for (let key in style) {
            styleMap += key + ' : ' + style[key] + '\n';
        }
        return styleMap;
    }

    setStyle = (event) => {
        let {value} = event.target;
        let style = {};
        value.split("\n").forEach(line => {
            if (line.includes(' : ')) {
                let lineVal = line.split(' : ');
                style[lineVal[0]] = lineVal[1];
            }
        });
        this.props.onChangeAttribute('style', style);
    }

    setAngle = (event) => {
        let val = parseInt(event.target.value);
        this.props.onChangeAttribute('angle', val);
    }

    setBorderWidth = (event) => {
        let val = getPixel(event);
        this.props.onChangeStyle('border-width', val);
    }

    backgroundColorClickHandler = () => {
        this.props.showColorPicker('background-color', this.props.backgroundColor);
    }

    borderColorClickHandler = () => {
        this.props.showColorPicker('border-color', this.props.borderColor);
    }
}