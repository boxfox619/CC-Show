import React from 'react';
import classnames from 'classnames';
import TextInput from 'components/Form/TextInput';
import TextArea from 'components/Form/TextArea';
import Toggle from 'components/Form/Toggle';
import CodeEditor from 'components/Form/CodeEditor';
import styles from './style.css';

const title = [
    'Asset Detail',
    'Asset Code'
]

class Editor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            openToStore: false,
            content: '',
            css: '',
            html: '',
            js: '',
            selectedPage: 0,
            thumbnail: ''
        };
        this.codeHandle = this.codeHandle.bind(this);
        this.saveAsset = this.saveAsset.bind(this);
        this.titleHandle = this.titleHandle.bind(this);
        this.openToStoreHandle = this.openToStoreHandle.bind(this);
        this.visible = this.visible.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.onUpdateThumbnail = this.onUpdateThumbnail.bind(this);
    }

    render() {
        return (
            <div className={styles.asset_editor}>
                <div className={styles.title}>{title[this.state.selectedPage]}</div>
                <div className={classnames(styles.page, styles.first, this.visible(0))}>
                    <div className={styles.content}>
                        <img onClick={this.onUpdateThumbnail} className={styles.thumbnail}/>
                        <div className={styles.form}>
                            <TextInput label={'제목'} text={this.state.title} width={'100%'} height={'45px'} onChange={this.titleHandle}/>
                            <TextInput label={'태그'} text={this.state.title} width={'70%'} height={'45px'} onChange={this.titleHandle}/>
                            <Toggle text={'스토어에 공개'} checked={this.state.openToStore} width={'30%'} onChange={this.openToStoreHandle}/>
                        </div>
                    </div>
                    <TextArea label={'설명'} text={this.state.title} onChange={this.titleHandle} width={'calc( 100% - 5px )'} height={'300px'}/>
                </div>
                <div className={classnames(styles.page, this.visible(1))}>
                    <CodeEditor
                        onChangeCode={this.codeHandle}
                        html={this.state.html}
                        css={this.state.css}
                        js={this.state.js}
                    />M
                </div>
                <ul className={styles.bottom_controller}>
                    <li className={(this.state.selectedPage > 0) ? '' : styles.hide} onClick={this.prev}>이전</li>
                    <li className={(this.state.selectedPage != title.length-1) ? '' : styles.hide} onClick={this.next}>다음</li>
                </ul>
            </div>
        );
    }

    onUpdateThumbnail() {

    }

    prev(){
        let currentPage = this.state.selectedPage;
        if (currentPage > 0) {
            this.setState({selectedPage: currentPage - 1});
        }
    }

    next(){
        let currentPage = this.state.selectedPage;
        if (currentPage < title.length - 1 ) {
            this.setState({selectedPage: currentPage + 1});
        }
    }

    visible(page){
        if(page==this.state.selectedPage){
            return styles.visible;
        }
        return '';
    }

    titleHandle(e) {
        this.setState({title: e.target.value});
    }

    openToStoreHandle(e) {
        this.setState({openToStore: e.target.checked});
    }

    codeHandle(type, code) {
        this.setState({[type]: code});
    }

    saveAsset() {
    }
}

export default Editor;
