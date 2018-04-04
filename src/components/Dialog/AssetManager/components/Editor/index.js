import React from 'react';
import TextInput from 'components/Form/TextInput';
import Toggle from 'components/Form/Toggle';
import CodeEditor from 'components/Form/CodeEditor';

class Editor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            openToStore: false,
            content: '',
            css: '',
            html: '',
            js: ''
        };
        this.codeHandle = this.codeHandle.bind(this);
        this.saveAsset = this.saveAsset.bind(this);
        this.titleHandle = this.titleHandle.bind(this);
        this.openToStoreHandle = this.openToStoreHandle.bind(this);
    }

    render() {
        return (
            <div>
                <div >
                    <TextInput label={'제목'} text={this.state.title} onChange={this.titleHandle}/>
                    <TextInput label={'태그'} text={this.state.title} onChange={this.titleHandle}/>
                    <Toggle text={'스토어에 공개'} checked={this.state.openToStore} onChange={this.openToStoreHandle}/>
                </div>
                <CodeEditor
                    onChangeCode={this.codeHandle}
                    html={this.state.html}
                    css={this.state.css}
                    js={this.state.js}
                />
            </div>
        );
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
