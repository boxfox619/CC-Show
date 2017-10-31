import React from 'react';
import styles from './Assets.css';
import crypto from 'crypto';

import axios from 'axios';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.string.isRequired,
  attrs: React.PropTypes.object.isRequired
};

function generateRandomCode(howMany, chars) {
    chars = chars
        || "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    var rnd = crypto.randomBytes(howMany)
        , value = new Array(howMany)
        , len = chars.length;

    for (var i = 0; i < howMany; i++) {
        value[i] = chars[rnd[i] % len]
    };

    return value.join('');
}

function convertCode(str){
  if(str.length==0)return str;
  let randomCode = generateRandomCode(8);
  let css = getStyle(str);
  let html = getHtml(str);
  let js = getStyle(str);
  html = replaceClass(html, randomCode);
  html = replaceHtmlTags(html, randomCode);
  if(!!css){
    css = replaceStyleClass(css, randomCode);
    css = replaceStyleTags(css, randomCode);
  }
  if(!!js){
    js = replaceJsNativeClass(js, randomCode);
    js = replaceQueryClass(js, randomCode);
  }
  return ((!!css)?css:'')+html+((!!js)?js:'');
}

function getStyle(str){
  let style = str.match(/<style>(.|\n|\r)*<\/style>/)
  return (!!style)?style[0]:null
}

function getJavascript(str){
  let script = str.match(/<script>(.|\n|\r)*<\/script>/)
  return (!!script)?script[0]:null
}

function getHtml(str){
  let html = str;
  if(!!getStyle(str))
    html = html.replace(getStyle(str), '')
  if(!!getJavascript(str))
    html = html.replace(getJavascript(str), '')
  return html;
}

function replaceHtmlTags(str, randomCode){
	let tags = str.match(/<[^>]+>/g);
    if(!!tags)
    for(let i=0;i<tags.length;i++){
    	let tagName = tags[i].match(/[^ <>/]+/)[0];
        str = str.replace(tags[i], tags[i].replace(tagName, tagName+'_'+randomCode))
    }
    return str
}

function replaceStyleSelectors(str, randomCode){
  var match =  str.match(/(.+){[^}]*}/i);
  var textInDe = match[1];
  match = textInDe.match(/[ ]?[.|#| ]{1}([^ .#]+)/g);
  let selectorStr = '';
  for(let i = 0 ;i<match.length; i++){
  	let selector = match[i];
    if(selector.indexOf('[')>-1){
    	if(selector.split('[')[0].length>1){
    		selectorStr += selector.split('[')[0]+'_'+randomCode+selector.substring(selector.split('[')[0].length, selector.length);
        }else{
        	selectorStr += selector;
        }
    }else{
    	selectorStr += selector+'_'+randomCode;
    }
  }
}

function replaceQueryClass(str, randomCode){

}

function replaceJsNativeClass(str, randomCode){
   var pattern = /getElement(s)?By[a-zA-Z]+\(['"][a-zA-Z-_0-9]+['"]\)/g;
   let selectors = str.match(pattern);
     if(!!selectors)
     for(let i = 0 ; i < selectors.length; i++){
         let nms = new String(selectors[i]).match(/\(['"][^"')(]+['"]\)/);
           if(!!nms){
             let nm = new String(nms[0]).replace(/\(['"]/, '').replace(/['"]\)/, '');
               nm+='_'+randomCode;
         str = str.replace(selectors[i], selectors[i].replace(nms[0], '("'+nm+'")'));
           }
     }
     return str;
 }

 function replaceStyleTags(str, randomCode){

 }

 function replaceStyleClass(str, randomCode){
     	var pattern = /[.#][^.{} :@]+/g;
     	let classes = str.match(pattern);
       if(!!classes)
     	for(let i = 0 ; i < classes.length; i++){
         	let op = new String(classes[i]).substr(0, 1);
       		let nm = new String(classes[i]).substr(1, classes[i].length);
 	  		str = str.replace(op+nm, op+nm+'_'+randomCode);
     	}
        	return str;
}

function replaceClass(str, randomCode){
    let classes = str.match(/class=\".*\"/g);
    if(!!classes)
      for(let i = 0 ; i < classes.length; i++){
      	let classList = classes[i].match(/\".*\"/)[0].replace(/\"/g,'').split(' ');
        let replacement = 'class="';
        for(let j = 0 ; j < classList.length ; j++){
        	replacement += classList[j]+'_'+randomCode+' ';
       	}
        replacement += '"';
        str = str.replace(classes[i], replacement);
       }
       return str;
}

class CustomAsset extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      code:''
    }
    this.code = ''
    this.clearCode = ''
  }

  render() {
    let code = this.state.code;
    if(!this.props.attrs.type){
      if(this.code!=this.props.value){
        this.code = this.props.value
        this.clearCode = convertCode(this.props.value)
      }
      code = this.clearCode
    }
    return (
      <div style={this.props.styles} dangerouslySetInnerHTML={ {__html: code}}/>
    )
  }

  componentDidMount(){
    if(this.props.attrs.type){
    axios.get('/store/simple/?id='+this.props.value)
    .then(response => {
      this.setState({code : convertCode(response.data.code)});
    }).catch(err => {
    });
    }
  }
}

CustomAsset.propTypes = propTypes;

export default CustomAsset;
