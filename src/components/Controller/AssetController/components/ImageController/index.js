import React from 'react';
import styles from '../../style.css';
import ControllerWrapper from '../ControllerWrapper/index';

const propTypes = {
    onChangeImage: React.PropTypes.func.isRequired,
    onChangeAttribute: React.PropTypes.func.isRequired,
    selectedAsset: React.PropTypes.object.isRequired
}

class ImageController extends React.Component {
    constructor(prop) {
        super(prop);

        this.setImageUrl = this.setImageUrl.bind(this);
        this.loadLocalImage = this.loadLocalImage.bind(this);
    }

    render() {
        return (
            <ControllerWrapper title="이미지">
                <div className={styles.items}>
                    <div className={styles.control_item + ' ' + styles.image_loader}
                         onClick={this.loadLocalImage}>
                        이미지 불러오기
                    </div>
                </div>
            </ControllerWrapper>
        )
    }

    loadLocalImage() {
        var fr = new FileReader();
        let _self = this;
        fr.onload = (e) => {
            let data = e.target.result;
            _self.props.onChangeImage(_self.props.selectedAsset.id, data);
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
