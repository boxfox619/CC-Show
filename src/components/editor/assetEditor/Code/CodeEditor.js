import React from 'react';
import styles from './styles.css';
import CodeEditorItem from './CodeEditorItem';

class CodeEditor extends React.Component{
    render(){
        return(
            <div>
                <CodeEditorItem/>
            </div>
        );
    }
}

export default CodeEditor;