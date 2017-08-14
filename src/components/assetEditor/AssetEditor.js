import React from 'react';
import HtmlEditor from './HtmlEditor';
import CssEditor from './CssEditor';
import JsEditor from './JsEditor';


class AssetEditor extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <HtmlEditor />
        <CssEditor />
        <JsEditor />    
      </div>
    )
  }
}

export default AssetEditor;
