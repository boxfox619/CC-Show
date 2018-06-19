import React from 'react';

import styles from '../../style.css';
import ControllerWrapper from '../ControllerWrapper/index';

const propTypes = {
  onChangeAttribute: React.PropTypes.func.isRequired,
  shape: React.PropTypes.func.isRequired
}

class ShapeController extends React.Component {
  constructor(prop) {
    super(prop);
    this.changeShape = this.changeShape.bind(this);
  }

  render() {
    return (
      <ControllerWrapper title="도형">
        <div className={styles.items}>
          <div className={styles.control_item + ' ' + styles.shapes}>
            <div>
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_square.png"
                style={this.props.shape === 'square' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_square_50.png"
                style={this.props.shape === 'square' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_roundSquare.png"
                style={this.props.shape === 'roundSquare' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_roundSquare_50.png"
                style={this.props.shape === 'roundSquare' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_ellipse.png"
                style={this.props.shape === 'ellipse' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_ellipse_50.png"
                style={this.props.shape === 'ellipse' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_triangle.png"
                style={this.props.shape === 'triangle' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_triangle_50.png"
                style={this.props.shape === 'triangle' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_diamond.png"
                style={this.props.shape === 'diamond' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_diamond_50.png"
                style={this.props.shape === 'diamond' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_pentagon.png"
                style={this.props.shape === 'pentagon' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_pentagon_50.png"
                style={this.props.shape === 'pentagon' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_hexagon.png"
                style={this.props.shape === 'hexagon' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_hexagon_50.png"
                style={this.props.shape === 'hexagon' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_octagon.png"
                style={this.props.shape === 'octagon' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_octagon_50.png"
                style={this.props.shape === 'octagon' ? {display: 'none'} : {}}
              />
            </div>
            <div>
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_star.png"
                style={this.props.shape === 'star' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_star_50.png"
                style={this.props.shape === 'star' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_heart.png"
                style={this.props.shape === 'heart' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_heart_50.png"
                style={this.props.shape === 'heart' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_moon.png"
                style={this.props.shape === 'moon' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_moon_50.png"
                style={this.props.shape === 'moon' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_spade.png"
                style={this.props.shape === 'spade' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_spade_50.png"
                style={this.props.shape === 'spade' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_clover.png"
                style={this.props.shape === 'clover' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_clover_50.png"
                style={this.props.shape === 'clover' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_stain.png"
                style={this.props.shape === 'stain' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_stain_50.png"
                style={this.props.shape === 'stain' ? {display: 'none'} : {}}
              />
            </div>
            <div>
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow1.png"
                style={this.props.shape === 'arrow1' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow1_50.png"
                style={this.props.shape === 'arrow1' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow2.png"
                style={this.props.shape === 'arrow2' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow2_50.png"
                style={this.props.shape === 'arrow2' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow3.png"
                style={this.props.shape === 'arrow3' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow3_50.png"
                style={this.props.shape === 'arrow3' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow4.png"
                style={this.props.shape === 'arrow4' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow4_50.png"
                style={this.props.shape === 'arrow4' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow5.png"
                style={this.props.shape === 'arrow5' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow5_50.png"
                style={this.props.shape === 'arrow5' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow6.png"
                style={this.props.shape === 'arrow6' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow6_50.png"
                style={this.props.shape === 'arrow6' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow7.png"
                style={this.props.shape === 'arrow7' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow7_50.png"
                style={this.props.shape === 'arrow7' ? {display: 'none'} : {}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow8.png"
                style={this.props.shape === 'arrow8' ? {} : {display: 'none'}}
              />
              <img className={styles.shape_kind_img}
                onClick={this.changeShape}
                src="/images/ic_arrow8_50.png"
                style={this.props.shape === 'arrow8' ? {display: 'none'} : {}}
              />
            </div>
          </div>
        </div>
      </ControllerWrapper>
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
