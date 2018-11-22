import React from 'react';

import styles from './styles.css';
import ControllerWrapper from './components/ControllerWrapper';

const shapes = ['square', 'roundSquare', 'ellipse', 'triangle', 'diamond', 'pentagon', 'hexagon', 'octagon' ,'star',
    'heart', 'moon', 'spade', 'clover', 'stain', 'arrow1', 'arrow2', 'arrow3', 'arrow4', 'arrow5', 'arrow6', 'arrow7', 'arrow8'];

export default class ShapeController extends React.Component {
    static propTypes = {
        onChangeAttribute: React.PropTypes.func.isRequired,
        shape: React.PropTypes.func.isRequired
    };

    constructor(prop) {
        super(prop);
        this.changeShape = this.changeShape.bind(this);
    }

    renderShape = (shape) => {
        return (
            <img className={styles["shape-image"]}
                 onClick={() => this.changeShape(shape)}
                 src={this.props.shape === shape ? `/images/ic_${shape}.png` : `/images/ic_${shape}_50.png`}
            />
        )
    };

    render() {
        return (
            <ControllerWrapper title="도형">
                <div className={styles["controller-container"]}>
                    <div className={`${styles.controller} ${styles["shape-container"]}`}>
                        {shapes.map(shape => this.renderShape(shape))}
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