import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {TextInput, TextArea, Toggle, TagInput, LabelText} from 'components';
import styles from './style.css';
import ImageService from 'services/image.service';

export default class DetailEditor extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        tagSuggestions: PropTypes.array,
        thumbnails: PropTypes.array.isRequired,
        openToStore: PropTypes.bool.isRequired,
        onUpdateTitle: PropTypes.func.isRequired,
        onUpdateContent: PropTypes.func.isRequired,
        onUpdateTags: PropTypes.func.isRequired,
        onToggleStore: PropTypes.func.isRequired,
        onUpdateThumbnails: PropTypes.func.isRequired,
        className: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            thumbnailPosition: 0
        }
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    render() {
        let renderSubThumbnails = () => {
            let items = [];
            let idx = 1;
            let thumbnailsLength = this.props.thumbnails.length;
            let max = (thumbnailsLength > 7) ? thumbnailsLength + 1 : 7;
            for (; idx <= max; idx++) {
                let currentIdx = idx;
                items.push(
                    <li className={styles.thumbnail}
                        key={thumbnailsLength + '-' + idx}
                        onClick={() => this.onUpdateThumbnail(currentIdx)}
                    >
                        {thumbnailsLength > currentIdx &&
                        <img src={this.props.thumbnails[currentIdx]}/>}
                    </li>);

            }
            return <ul
                style={{'transform': 'translateX( calc( 30px - ' + this.state.thumbnailPosition * 71.71 + 'px))'}}>{items}</ul>;
        }
        return (
            <div className={classnames(styles.content, this.props.className)}>
                <div className={styles.top}>
                    <div className={styles.thumbnail_form}>
                        <div className={classnames(styles.thumbnail, styles.main)}
                             onClick={() => this.onUpdateThumbnail(0)}
                        >
                            {this.props.thumbnails.length > 0 &&
                            (<img src={this.props.thumbnails[0]}/>)
                            }
                        </div>
                        <div className={styles.thumbnails}>
                            <div className={styles.btn}
                                 onClick={this.prev}
                            />
                            {renderSubThumbnails()}
                            <div className={styles.btn}
                                 onClick={this.next}
                                 style={{'right': '0', 'top': '0'}}
                            />
                        </div>
                    </div>
                    <div className={styles.form}>
                        <TextInput
                            fontSize={'13px'}
                            height={'38px'}
                            label={'제목'}
                            onChange={this.props.onUpdateTitle}
                            placeholder={'제목을 입력해 주세요'}
                            text={this.props.title}
                        />
                        <TagInput
                            fontSize={'13px'}
                            label={'태그'}
                            onChange={this.props.onUpdateTags}
                            placeholder={'태그를 입력해 주세요'}
                            suggestions={this.props.tagSuggestions}
                            tags={this.props.tags}
                            width={'100%'}
                        />
                        <div>
                            <LabelText text={'스토어 공개범위'}/>
                            <Toggle
                                checked={this.props.openToStore}
                                fontSize={'13px'}
                                height={'35px'}
                                margin={'0 15px 0 0'}
                                onChange={() => this.props.onToggleStore(true)}
                                text={'공개'}
                                width={'175px'}
                            />
                            <Toggle
                                checked={!this.props.openToStore}
                                fontSize={'13px'}
                                height={'35px'}
                                onChange={() => this.props.onToggleStore(false)}
                                text={'공개안함'}
                                width={'175px'}
                            />
                        </div>
                    </div>
                </div>
                <LabelText text={'부가설명'}/>
                <hr className={styles.underline}/>
                <TextArea
                    fontSize={'13px'}
                    height={'170px'}
                    onChange={this.props.onUpdateContent}
                    placeholder={'내용을 입력하세요'}
                    text={this.props.content}
                    width={'100%'}
                />
            </div>
        );
    }

    prev() {
        if (this.state.thumbnailPosition < this.props.thumbnails.length - 7) {
            this.setState({thumbnailPosition: this.state.thumbnailPosition + 1});
        }
    }

    next() {
        if (this.state.thumbnailPosition > 0) {
            this.setState({thumbnailPosition: this.state.thumbnailPosition - 1});
        }
    }

    onUpdateThumbnail(idx) {
        if (idx < this.props.thumbnails.length) {
            let thumbnails = this.props.thumbnails;
            thumbnails.splice(idx, 1);
            this.props.onUpdateThumbnails(thumbnails);
            if (this.state.thumbnailPosition >= this.props.thumbnails.length - 7) {
                this.next();
            }
        } else {
            ImageService.getImage((result) => {
                if (result.result) {
                    let thumbnails = this.props.thumbnails;
                    thumbnails.push(result.data);
                    this.props.onUpdateThumbnails(thumbnails);
                }
            });
        }
    }
}