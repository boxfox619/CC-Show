import React from 'react';
import styles from './Assets.css';
import crypto from 'crypto';

import axios from 'axios';

const propTypes = {
  styles: React.PropTypes.object.isRequired,
  value: React.PropTypes.number.isRequired,
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
  let randomCode = generateRandomCode(8);
  str = replaceStyleClass(str, randomCode);
  str = replaceClass(str, randomCode);
  str = replaceJsNativeClass(str, randomCode);
  str = replaceQueryClass(str, randomCode);
  return str;
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
  }

  render() {
    return (
      <div style={this.props.styles} dangerouslySetInnerHTML={ {__html: this.state.code}}/>
    )
  }

  componentDidMount(){
    if(this.props.attrs.type){
    axios.get('/store/simple/?id='+this.props.value)
    .then(response => {
      this.setState({code : convertCode(response.data.code)});
    }).catch(err => {
    });
  }else{
    this.setState({code : convertCode(this.props.value)});
    }
  }
}

CustomAsset.propTypes = propTypes;

export default CustomAsset;
