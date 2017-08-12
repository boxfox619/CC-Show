import React from 'react';
import CodeEditor from './CodeEditor'

class JsEditor extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <CodeEditor option={{mode: 'javascript'}}/>
      </div>
    )
  }
}

export default JsEditor;
