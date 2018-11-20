import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tag-autocomplete';
import styles from './style.css';
import LabelText from '../label-text';

export default class TagInput extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        tags: PropTypes.array.isRequired,
        suggestions: PropTypes.array.isRequired,
        placeholder: PropTypes.string,
        label: PropTypes.string,
        style: PropTypes.object
    };
    props = {
        className: '',
        suggestions: [{id: 'test', name: 'asd'}]
    };

    constructor(prop) {
        super(prop);

        this.deleteTag = this.deleteTag.bind(this);
        this.addTag = this.addTag.bind(this);
    }

    render() {
        return (
            <div>
                {!!this.props.label && <LabelText text={this.props.label}/>}
                <div style={this.props.style}>
                    <TagsInput
                        allowNew
                        autoresize={false}
                        classNames={{
                            root: styles['react-tags'],
                            rootFocused: styles['is-focused'],
                            selected: styles['react-tags__selected'],
                            selectedTag: styles['react-tags__selected-tag'],
                            selectedTagName: styles['react-tags__selected-tag-name'],
                            search: styles['react-tags__search'],
                            searchInput: styles['react-tags__search-input'],
                            suggestions: styles['react-tags__suggestions'],
                            suggestionActive: styles['is-active'],
                            suggestionDisabled: styles['is-disabled']
                        }}
                        handleAddition={this.addTag}
                        handleDelete={this.deleteTag}
                        placeholder={this.props.placeholder}
                        suggestions={this.props.suggestions}
                        tags={this.props.tags}/>
                </div>
            </div>
        );
    }

    deleteTag(i) {
        const tags = this.props.tags.slice(0);
        tags.splice(i, 1);
        this.props.onChange(tags);
    }

    addTag(tag) {
        const tags = [].concat(this.props.tags, tag);
        this.props.onChange(tags);
    }
}