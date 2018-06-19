import React from 'react';
import styles from '../../style.css';
import ControllerWrapper from '../ControllerWrapper/index';
import ImageService from 'services/image.service';

const propTypes = {
  onChangeImage: React.PropTypes.func.isRequired,
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
            onClick={this.loadLocalImage}
          >
                        이미지 불러오기
          </div>
        </div>
      </ControllerWrapper>
    )
  }

  loadLocalImage() {
    ImageService.getImage((result)=>{
      if(result.result){
        this.props.onChangeImage(result.data);
      }
    });
  }

  setImageUrl(event) {
    let {value} = event.target;
    this.props.onChangeImage(value);
  }
}

ImageController.propTypes = propTypes;

export default ImageController;
