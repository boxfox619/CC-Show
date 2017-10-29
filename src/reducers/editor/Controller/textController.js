import {setSelectAssetStyle, getSelectedAssetStyle, getSelectedAsset, replaceSelectAssetObj} from './ControllerUtil';

let textSelectionRange = {
  start: 0,
  end: 0
}

function getSplitIndex(p_start, p_end){
  let splitIndex = -1;
  if(start<p_start&&(end>p_start&&end<p_end))
    splitIndex = start;
  if((start>p_start&&start<p_end)&&end>p_end)
    splitIndex = end;
  return splitIndex;
}

function getFlipedNodes(subStyles){
  let flipedNodes = [...subStyles];
  for(let i = 0; i<subStyles.length; i++){
    if(subStyles[i].childs.length>0){
      flipedNodes = [...flipedNodes, ...getFlipedNodes(subStyles[i].childs)];
    }
  }
  return flipedNodes;
}

function putStyle(styleObj, newStyleObj){
  Object.keys(object).map(function(objectKey, index) {
    styleObj[objectKey] = newStyleObj[objectKey];
  });
}

function buildTree(subStyles, newStyle){
  let check = false;
  for(let i = 0; i<subStyles.length; i++){
    if(subStyles[i].start==newStyle.start&&subStyles.end==newStyle.end){
      check = true;
      putStyle(subStyles[i], newStyle);
    }else if(subStyles[i].start<=newStyle.start&&subStyles[i].end>=newStyle.end){
      check = true;
      if(!buildTree(subStyles[i].childs, newStyle)){
        subStyles[i].childs.push(newStyle);
      }
    }
  }
  return check;
}

function updateSubStyle(selectedAsset, styleName, styleValue){
  /*
    선택된 범위를 지정하는 스타일이 있는지 먼저 검사
    선택된 범위 start 부터 end 사이에 start 또는 end 둘중 하나만 존재하는 항목이 있는지 검사
    있다면 쪼갬
    만들어진 새 항목들을 기존 엘리먼트들과 비교하여 포함관계에 있는지(속하는지, 속하는 엘리먼트가 있는지) 검사

    그려줄때는 부모의 start를 부분을 -하면 해당 텍스트의 포지션을 얻을 수 있음
  */
  let subStyles = [...getSelectedAsset(state).subStyles];
  let newStyles = new Array();
  newStyles.push({start : textSelectionRange.start,
                  end : textSelectionRange.end,
                  style: {styleName: styleValue}})
  for(let i = 0; i<subStyles.length; i++){
    for( let j = 0; j<newStyles.length;j++){
      let idx = getSplitIndex(subStyles[i].start,subStyles[i].end);
      if(idx != -1){
        newStyles.delete(newStyles[j]);
        newStyles.push({start : textSelectionRange.start,
                        end : idx,
                        style: {styleName: styleValue}});
        newStyles.push({start : idx,
                        end : textSelectionRange.end,
                        style: {styleName: styleValue}});
      }
      i-=1;
    }
  }
  newStyles.map(function(item){
    if(!buildTree(subStyles, item)){
      subStyles.push(item);
    }
  });
  console.log(subStyles);
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
      return replaceSelectAssetObj('subStyle', updateSubStyle(state, 'color', action.textColor))
    }
  case actionTypes.ASSET_SET_TEXT_FONT:
    return setSelectAssetStyle(state, 'font-family', action.font)
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
