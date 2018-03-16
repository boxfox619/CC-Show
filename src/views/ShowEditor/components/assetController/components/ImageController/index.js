import React from 'react';
import styles from '../../style.css';

import ControllerHeader from '../controllerHeader';

const propTypes = {
    onChangeAssetImage: React.PropTypes.func.isRequired,
    onChangeAttribute: React.PropTypes.func.isRequired
}

class ImageController extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            image: true
        };

        this.setImageUrl = this.setImageUrl.bind(this);
        this.loadLocalImage = this.loadLocalImage.bind(this);
    }

    render() {
        return (
            <div>
                <div className={styles.fliping_controller_section}>
                    <ControllerHeader title={'이미지'} onToggle={(toggle) => this.setState({image: toggle})}/>
                    {this.state.image &&
                    <div className={styles.items}>
                        <div className={styles.control_item + ' ' + styles.image_loader}
                             onClick={this.loadLocalImage}>
                            이미지 불러오기
                        </div>
                    </div>
                    }
                </div>
                <hr className={styles.controller_hr}/>
            </div>
        )
    }

    loadLocalImage() {
        var fr = new FileReader();
        let _self = this;
        fr.onload = (e) => {
            let data = e.target.result;
            _self.props.setAssetImage(_self.props.selectedAsset.id, data);
        };
        var inputElement = document.createElement("input");
        inputElement.type = "file";
        inputElement.addEventListener("change", function () {
            fr.readAsDataURL(inputElement.files[0]);
        });
        inputElement.dispatchEvent(new MouseEvent("click"));
    }

    setImageUrl(event) {
        let {value} = event.target;
        this.props.onChangeAttribute('value', value);
    }
}

ImageController.propTypes = propTypes;
export default ImageController;
