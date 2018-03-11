import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const propTypes = {
    codeType: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
}

export default function CodeEditor({codeType, onChange}) {
    const code = this.state.code;
    const options = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: false,
    };
    const requireConfig = {
        paths: {'vs': '/vs'}
    }

    const onChange = (newValue, e) => {
        this.setState({code: newValue});
        this.props.onChange(newValue);
    }

    return (
        <MonacoEditor height="252" width="110%" language={codeType}
                      value={code} options={options} onChange={onChange}
                      requireConfig={requireConfig}
                      editorDidMount={this.editorDidMount}/>
    );
}

CodeEditor.propTypes = propTypes;
