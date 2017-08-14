import React from 'react';
import CodeEditor from './CodeEditor'

class CssEditor extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <CodeEditor option={{mode: 'css'}} />
      </div>
    )
  }
}

export default CssEditor;
 