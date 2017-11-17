import {setSelectAssetStyle, getSelectedAssetStyle, getSelectedAsset, replaceSelectAssetObj} from './ControllerUtil';

let textSelectionRange = {
  start: 0,
  end: 0
}

function getSplitIndex(start, end, p_start, p_end){
  let splitIndex = -1;
  if(start<p_start&&(end>p_start&&end<p_end))
    splitIndex = p_start;
  if((start>p_start&&start<p_end)&&end>p_end)
    splitIndex = p_end;
  return splitIndex;
}

function getFlipedNodes(subStyles){
  let flipedNodes = JSON.parse(JSON.stringify(subStyles));
  for(let i = 0; i<flipedNodes.length; i++){
    if(flipedNodes[i].childs.length>0){
      flipedNodes = [...flipedNodes, ...getFlipedNodes(flipedNodes[i].childs)];
      flipedNodes[i].childs = [];
    }
  }
  return flipedNodes;
}

function putStyle(styleObj, newStyleObj){
  Object.keys(newStyleObj.style).map(function(objectKey, index) {
    styleObj.style[objectKey] = newStyleObj.style[objectKey];
  });
}

function buildTree(subStyles, newStyle){
  let check = false;
  for(let i = 0; i<subStyles.length&&!check; i++){
    if(subStyles[i].start==newStyle.start&&subStyles[i].end==newStyle.end){
      check = true;
      putStyle(subStyles[i], newStyle);
    }else if(subStyles[i].start<=newStyle.start&&subStyles[i].end>=newStyle.end){
      check = true;
      if(!buildTree(subStyles[i].childs, newStyle)){
        subStyles[i].childs.push(newStyle);
      }
    }else if(subStyles[i].start>=newStyle.start&&subStyles[i].end<=newStyle.end){
      let subStyle = subStyles[i];
      subStyles.splice(subStyles.indexOf(subStyle), 1);
      newStyle.childs.push(subStyle);
      i-=1;
    }
  }
  return check;
}

function updateSubStyle(state, styleName, styleValue){
  let subStyles = getFlipedNodes([...getSelectedAsset(state).subStyle]);
  let newStyles2 = [{start : textSelectionRange.start,
                  end : textSelectionRange.end,
                  childs: [],
                  style: {styleName: styleValue}}];
  let newStyles = [...newStyles2];
  for(let i = 0; i<subStyles.length; i++){
    for( let j = 0; j<newStyles.length;j++){
      let idx = getSplitIndex(newStyles[j].start, newStyles[j].end, subStyles[i].start,subStyles[i].end);
      console.log(newStyles[j].start,':',subStyles[j].start,'  ',newStyles[j].end,':',subStyles[j].end,idx);
      if(idx != -1){
        newStyles.splice(newStyles.indexOf(newStyles[j]), 1);
        newStyles.push({start : textSelectionRange.start,
                        end : idx,
                        childs: [],
                        style: {styleName: styleValue}});
        newStyles.push({start : idx,
                        end : textSelectionRange.end,
                        childs: [],
                        style: {styleName: styleValue}});
        j-=1;
      }
    }
  }
  subStyles = [...getSelectedAsset(state).subStyle];
  newStyles.map(function(item){
    if(!buildTree(subStyles, item)){
      subStyles.push(item);
    }
  });
  return subStyles;
}

export default function(state, action, actionTypes){
  switch (action.type) {
  case actionTypes.ASSET_SET_TEXT_SELECT_RANGE:
    textSelectionRange.start = action.start;
    textSelectionRange.end = action.end;
    return state
  case actionTypes.ASSET_SET_TEXT_COLOR:
    if(textSelectionRange.start==textSelectionRange.end)
      return setSelectAssetStyle(state, 'color', action.textColor)
    else {
      return replaceSelectAssetObj(state, 'subStyle', updateSubStyle(state, 'color', action.textColor))
    }
  case actionTypes.ASSET_SET_TEXT_FONT:
    if(textSelectionRange.start==textSelectionRange.end)
      return setSelectAssetStyle(state, 'font-family', action.font)
    else {
      return replaceSelectAssetObj(state, 'subStyle', updateSubStyle(state, 'font-family', action.font))
    }
  case actionTypes.ASSET_SET_TEXT_FONT_SIZE:
    return setSelectAssetStyle(state, 'font-size', action.fontSize)
  case actionTypes.ASSET_SET_TEXT_FONT_WEIGHT:
    return setSelectAssetStyle(state, 'font-width', action.value)
  case actionTypes.ASSET_SET_TEXT_CHARACTER_SPACING:
    return setSelectAssetStyle(state, 'letter-spacing', action.value)
  case actionTypes.ASSET_SET_TEXT_LINE_SPACING:
    return setSelectAssetStyle(state, 'line-height', action.value)
  case actionTypes.ASSET_SET_TEXT_SORT:
    return setSelectAssetStyle(state, 'text-align', action.sort)
  case actionTypes.ASSET_SET_TEXT_FONT_BOLD:
    return setSelectAssetStyle(state, 'font-weight', (getSelectedAssetStyle(state, 'font-weight') == 'bold') ? 'normal' :  'bold')
  case actionTypes.ASSET_SET_TEXT_FONT_UNDERLINE:
    return setSelectAssetStyle(state, 'text-decoration', (getSelectedAssetStyle(state, 'text-decoration') == 'underline') ? 'none' : 'underline')
  case actionTypes.ASSET_SET_TEXT_FONT_ITALIC:
    return setSelectAssetStyle(state, 'font-style', (getSelectedAssetStyle(state, 'font-style') == 'italic') ? 'normal' : 'italic')
  case actionTypes.ASSET_SET_TEXT_FONT_STRIKETHROUGH:
    return setSelectAssetStyle(state, 'text-decoration', (getSelectedAssetStyle(state, 'text-decoration') == 'line-through') ? 'none' : 'line-through')
  default:
      return state;
  }
}
