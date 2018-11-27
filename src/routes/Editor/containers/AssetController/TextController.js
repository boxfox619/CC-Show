import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ControllerWrapper from 'components/ControllerWrapper';
import InputControllerItem from 'components/InputControllerItem';

const fonts = ['굴림', '굴림체', '궁서', '궁서체', '돋움', '돋움체', '바탕', '바탕체', '휴먼엽서체'];

const AttributeIcon = ({attribute, value, toggleValue, icon}) => {
    const onClick = () => {
        if(this.props.style[attribute] === value && !!toggleValue){
            this.props.onChangeStyle(attribute, toggleValue);
        }else{
            this.props.onChangeStyle(attribute, value);
        }
    };
    return (
        <img onClick={onClick}
             src={this.props.style[attribute] === value ? `/images/${icon}_apply.png`: `/images/${icon}.png`}
        />
    )
};

export default class TextController extends React.Component {
    static propTypes = {
        onChangeStyle: PropTypes.func.isRequired,
        showColorPicker: PropTypes.func.isRequired,
        style: PropTypes.object.isRequired
    };

    render() {
        return (
            <ControllerWrapper title='텍스트'>
                <div className={styles["controller-container"]}>
                    <div>
                        <div>
                            <div className={styles['controller']}>
                                <select className={styles['input']} onChange={this.setFont}
                                        style={{'width': '235px', 'cursor': 'pointer'}}>
                                    {fonts.map(font => <option value={font}>{font}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <InputControllerItem title={<img src='/images/ic_format_size.png'/>}
                                                 onChange={this.setFontSize} value={this.getFontSize()}/>
                            <InputControllerItem title={<img onClick={() => this.props.onChangeStyle('line-height', 'normal')} src='/images/ic_format_line.png'/>}
                                                 onChange={this.setLineSpacing} value={this.getLineSpacing()}/>
                        </div>

                        <div>
                            <InputControllerItem title={<img src='/images/ic_between.png'/>} onChange={this.setLetterSpacing} value={this.getLetterSpacing()} />
                            <div className={styles['controller']}>
                                <span className={styles['title']}><img src='/images/ic_color.png'/></span>
                                <div className={styles["color-picker"]}
                                     onClick={() => this.props.showColorPicker('color', this.props.style.color)}
                                     style={{backgroundColor: this.getTextColor()}}
                                />
                            </div>
                        </div>

                    </div>
                    <div id={styles['text-attribute-controller']}>
                        <AttributeIcon attribute={'text-align'} value={'left'} icon={'ic_format_align_left'}/>
                        <AttributeIcon attribute={'text-align'} value={'center'} icon={'ic_format_align_center'}/>
                        <AttributeIcon attribute={'text-align'} value={'right'} icon={'ic_format_align_right'}/>
                        <AttributeIcon attribute={'text-align'} value={'justify'} icon={'ic_format_align_justify'}/>
                        <AttributeIcon attribute={'font-weight'} value={'bold'} toggleValue={'normal'} icon={'ic_format_bold'}/>
                        <AttributeIcon attribute={'font-style'} value={'italic'} toggleValue={'normal'} icon={'ic_format_italic'}/>
                        <AttributeIcon attribute={'font-style'} value={'italic'} toggleValue={'normal'} icon={'ic_format_italic'}/>
                        <AttributeIcon attribute={'text-decoration'} value={'underline'} toggleValue={'none'} icon={'ic_format_underlined'}/>
                        <AttributeIcon attribute={'text-decoration'} value={'line-through'} toggleValue={'none'} icon={'ic_format_strikethrough'}/>
                    </div>
                </div>
            </ControllerWrapper>
        )
    }

    getFontWidth = () => {
        return this.props.style['font-width'];
    };

    getFontSize = () => {
        return this.props.style['font-size'];
    };

    getLetterSpacing = () => {
        return parseInt(this.props.style['letter-spacing']);
    };

    getTextColor = () => {
        let color = this.props.style.color;
        return (!!color) ? color : 'rgba(0, 0, 0)';
    };

    getLineSpacing = () => {
        let lineSpacing = this.props.style['line-height'];
        return (lineSpacing != 'normal') ? parseInt(lineSpacing) : lineSpacing;
    };

    setFontWidth(event) {
        let {value} = event.target;
        let intValue = parseInt(value);
        if (isNaN(intValue)) {
            intValue = 0;
        }
        this.props.onChangeStyle('font-width', intValue);
    };

    setFont = (event) => {
        let {value} = event.target;
        this.props.onChangeStyle('font-family', value);
    };

    setFontSize = (event) => {
        let {value} = event.target;
        let intValue = parseInt(value);
        if (isNaN(intValue)) {
            intValue = 0;
        }
        this.props.onChangeStyle('font-size', intValue + 'px');
    };

    setLineSpacing = (event) => {
        let {value} = event.target;
        let intValue = parseInt(value);
        if (isNaN(intValue)) {
            intValue = 0;
        }
        this.props.onChangeStyle('line-height', intValue + '%');
    };

    setLetterSpacing = (event) => {
        let {value} = event.target;
        let intValue = parseInt(value);
        if (isNaN(intValue)) {
            intValue = 0;
        }
        this.props.onChangeStyle('letter-spacing', intValue + 'px');
    };
}