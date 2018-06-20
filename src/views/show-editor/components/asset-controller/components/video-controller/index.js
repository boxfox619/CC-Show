import React from 'react';
import styles from '../../style.css';
import ControllerWrapper from '../controller-wrapper';

const propTypes = {
  onChangeAttribute: React.PropTypes.func.isRequired,
  url: React.PropTypes.string.isRequired,
  preview: React.PropTypes.bool.isRequired
}

class VideoController extends React.Component {
  constructor(props) {
    super(props);
    this.setUrl = this.setUrl.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
  }

  render() {
    return (
      <ControllerWrapper title="비디오">
        <div className={styles.items}>
          <div className={styles.control_item + ' ' + styles.URL_controller}>
            <span className={styles.attribute_item_title}>URL :</span>
            <input className={styles.attribute_item_input}
              onChange={this.setUrl}
              style={{'textAlign': 'left'}}
              type="text"
              value={this.props.url}
            />
          </div>
          <div
            className={styles.control_item + ' ' + styles.video_preview_toggle + ' ' + ((this.props.preview) ? styles.active : '')}
            onClick={this.togglePreview}
          >
                        미리보기
          </div>
        </div>
      </ControllerWrapper>
    )
  }

  togglePreview() {
    this.props.onChangeAttribute('preview', !this.props.preview);
  }

  setUrl(event) {
    let {value} = event.target;
    this.props.onChangeAttribute('value', value);
  }
}

VideoController.propTypes = propTypes;

export default VideoController;
