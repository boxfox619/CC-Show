import React from 'react';
import styles from './styles.css';
import ControllerWrapper from './components/ControllerWrapper';
import ImageService from 'services/image.service';

export default class ImageController extends React.Component {
    static propTypes = {
        onChangeImage: React.PropTypes.func.isRequired,
    };

    render() {
        return (
            <ControllerWrapper title="이미지">
                <div className={styles["controller-container"]}>
                    <div id={styles['image-loader']} className={styles['controller']} onClick={this.loadLocalImage}>
                        이미지 불러오기
                    </div>
                </div>
            </ControllerWrapper>
        )
    }

    loadLocalImage = () =>{
        ImageService.getImage((result) => {
            if (result.result) {
                this.props.onChangeImage(result.data);
            }
        });
    }

    setImageUrl = (event) =>{
        let {value} = event.target;
        this.props.onChangeImage(value);
    }
}