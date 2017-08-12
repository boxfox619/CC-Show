import React from 'react';
import CodeEditor from './CodeEditor'

class HtmlEditor extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <CodeEditor option={{mode: 'html'}}/>
      </div>
    )
  }
}

export default HtmlEditor;
