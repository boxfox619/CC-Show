import React from 'react';
import classnames from 'classnames';
import TextInput from 'components/Form/TextInput';
import TextArea from 'components/Form/TextArea';
import Toggle from 'components/Form/Toggle';
import styles from './style.css';
import TagInput from 'components/Form/TagInput';
import LabelText from "../../../../../../Form/LabelText";
import ImageService from "../../../../../../../services/image.service";

const propTypes = {
  title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
  tags: React.PropTypes.array.isRequired,
  tagSuggestions: React.PropTypes.array,
  thumbnails: React.PropTypes.array.isRequired,
  openToStore: React.PropTypes.bool.isRequired,
  onUpdateTitle: React.PropTypes.func.isRequired,
    onUpdateContent: React.PropTypes.func.isRequired,
  onUpdateTags: React.PropTypes.func.isRequired,
  onToggleStore: React.PropTypes.func.isRequired,
  onUpdateThumbnails: React.PropTypes.func.isRequired
};

class DetailEditor extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
      let renderSubThumbnails = () => {
          if (this.props.thumbnails.length > 1) {
              return this.props.thumbnails.splice(0, 1).map((thumbnail, idx) => {
                  return (
                    <li className={styles.thumbnail} onClick={() => this.onUpdateThumbnail(idx+1)}>
                      <img src={thumbnail} />
                    </li>
                  );
              });
          }
      }
    return (
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.thumbnail_form}>
            <div className={classnames(styles.thumbnail, styles.main)}
              onClick={() => this.onUpdateThumbnail(0)}>
                {this.props.thumbnails.length > 0 &&
                (<img src={this.props.thumbnails[0]} />)
                }
            </div>
            <div className={styles.thumbnails}>
              <div className={styles.btn} />
              <ul>
                {renderSubThumbnails()}
              </ul>
              <div className={styles.btn} style={{'right':'0', 'top': '0'}} />
            </div>
          </div>
          <div className={styles.form}>
            <TextInput
              label={'제목'}
              height={'38px'}
              fontSize={'13px'}
              placeholder={'제목을 입력해 주세요'}
              onChange={this.props.onUpdateTitle}
              text={this.props.title}
            />
            <TagInput
              label={'태그'}
              width={'100%'}
              fontSize={'13px'}
              tags={this.props.tags}
              placeholder={'태그를 입력해 주세요'}
              suggestions={this.props.tagSuggestions}
              onChange={this.props.onUpdateTags}
            />
            <div>
              <LabelText text={'스토어 공개범위'} />
              <Toggle
                checked={this.props.openToStore}
                onChange={()=>this.props.onToggleStore(true)}
                text={'공개'}
                width={'175px'}
                height={'35px'}
                fontSize={'13px'}
                margin={'0 15px 0 0'}
                />
              <Toggle
                checked={!this.props.openToStore}
                onChange={()=>this.props.onToggleStore(false)}
                text={'공개안함'}
                width={'175px'}
                height={'35px'}
                fontSize={'13px'}
                />
            </div>
          </div>
        </div>
        <LabelText text={'부가설명'} />
        <hr className={styles.underline} />
        <TextArea
          height={'200px'}
          placeholder={'내용을 입력하세요'}
          onChange={this.props.onUpdateContent}
          text={this.props.content}
          width={'100%'}
          fontSize={'13px'}
          />
      </div>
    );
  }

    onUpdateThumbnail(idx) {
        ImageService.getImage((result) => {
            if (result.result) {
            }
        });
    }
}

DetailEditor.propTypes = propTypes;

export default DetailEditor;
