import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const propTypes = {
    codeType: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    code: React.PropTypes.string.isRequired
}

export default function CodeEditor({codeType, onChange, code}) {
    const options = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: false,
        autoClosingBrackets: true,
        contextmenu: false,
        disableLayerHinting: false,
        minimap: {enabled: false},
    };
    const requireConfig = {
        paths: {'vs': '/vs'}
    }

    const editorDidMount = (editor) => {
        editor.focus();
    }

    return (
      <MonacoEditor height='252' width='100%' language={codeType}
        value={code} options={options} onChange={onChange}
        requireConfig={requireConfig}
        editorDidMount={editorDidMount} />
    );

}

CodeEditor.propTypes = propTypes;
