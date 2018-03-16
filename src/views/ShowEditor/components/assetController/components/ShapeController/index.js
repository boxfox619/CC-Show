import React from 'react';

import ControllerHeader from '../controllerHeader';
import styles from '../../style.css';

const propTypes = {
    onChangeAttribute: React.PropTypes.func.isRequired,
    shape: React.PropTypes.func.isRequired

}

class ShapeController extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            shape: true,
        };
        this.changeShape = this.changeShape.bind(this);
    }

    render() {
        return (
            <div>
                <div className={styles.fliping_controller_section}>
                    <ControllerHeader title={'도형'} onToggle={(toggle) => this.setState({shape: toggle})}/>
                    {this.state.shape &&
                    <div className={styles.items}>
                        <div className={styles.control_item + ' ' + styles.shapes}>
                            <div>
                                <img src="/images/ic_square.png" onClick={this.changeShape}
                                     style={this.props.shape === 'square' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_square_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'square' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_roundSquare.png" onClick={this.changeShape}
                                     style={this.props.shape === 'roundSquare' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_roundSquare_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'roundSquare' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_ellipse.png" onClick={this.changeShape}
                                     style={this.props.shape === 'ellipse' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_ellipse_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'ellipse' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_triangle.png" onClick={this.changeShape}
                                     style={this.props.shape === 'triangle' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_triangle_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'triangle' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_diamond.png" onClick={this.changeShape}
                                     style={this.props.shape === 'diamond' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_diamond_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'diamond' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_pentagon.png" onClick={this.changeShape}
                                     style={this.props.shape === 'pentagon' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_pentagon_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'pentagon' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_hexagon.png" onClick={this.changeShape}
                                     style={this.props.shape === 'hexagon' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_hexagon_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'hexagon' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_octagon.png" onClick={this.changeShape}
                                     style={this.props.shape === 'octagon' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_octagon_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'octagon' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                            </div>
                            <div>
                                <img src="/images/ic_star.png" onClick={this.changeShape}
                                     style={this.props.shape === 'star' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_star_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'star' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_heart.png" onClick={this.changeShape}
                                     style={this.props.shape === 'heart' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_heart_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'heart' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_moon.png" onClick={this.changeShape}
                                     style={this.props.shape === 'moon' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_moon_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'moon' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_spade.png" onClick={this.changeShape}
                                     style={this.props.shape === 'spade' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_spade_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'spade' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_clover.png" onClick={this.changeShape}
                                     style={this.props.shape === 'clover' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_clover_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'clover' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_stain.png" onClick={this.changeShape}
                                     style={this.props.shape === 'stain' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_stain_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'stain' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                            </div>
                            <div>
                                <img src="/images/ic_arrow1.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow1' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow1_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow1' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow2.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow2' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow2_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow2' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow3.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow3' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow3_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow3' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow4.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow4' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow4_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow4' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow5.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow5' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow5_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow5' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow6.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow6' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow6_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow6' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow7.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow7' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow7_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow7' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow8.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow8' ? {} : {display: 'none'}}
                                     className={styles.shape_kind_img}/>
                                <img src="/images/ic_arrow8_50.png" onClick={this.changeShape}
                                     style={this.props.shape === 'arrow8' ? {display: 'none'} : {}}
                                     className={styles.shape_kind_img}/>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <hr className={styles.controller_hr}/>
            </div>
        )
    }

    changeShape(event) {
        let {src} = event.target;
        let shape = src.split('_')[1].split('.')[0];
        if (shape.split('_').length > 1) shape = shape.split('_')[0];
        this.props.onChangeAttribute('value', shape);
    }
}

ShapeController.propTypes = propTypes;

export default ShapeController;
