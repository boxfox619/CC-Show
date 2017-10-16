export const actionTypes = {
  SET_TITLE : 'SET_TITLE',
  SET_HTML : 'SET_HTML',
  SET_CSS : 'SET_CSS',
  SET_JS : 'SET_JS',
  SET_PREVIEW : 'SET_PREVIEW',
  GET_PREVIEW_IMAGE : 'GET_PREVIEW_IMAGE',
  GET_CONTENT : 'GET_CONTENT',
  GET_PRICE : 'GET_PRICE',
  GET_LICENSE : 'GET_LICENSE',
  GET_OPEN_TO_STORE : 'GET_OPEN_TO_STORE',
  GET_CHANGE_TO_CHARGE : 'GET_CHANGE_TO_CHARGE',
}

export function setTitle(title){
    return{
        type : actionTypes.SET_TITLE,
        title : title
    }
}

export function setHtml(htmlsource){
    return{
        type : actionTypes.SET_HTML,
        htmlsource : htmlsource
    }
}

export function setCSS(csssource){
    return{
        type : actionTypes.SET_CSS,
        csssource : csssource
    }
}

export function setJS(jssource){
    return{
        type : actionTypes.SET_JS,
        jssource : jssource
    }
}

export function setPreview(image){
    return{
        type : actionTypes.SET_PREVIEW,
        image : image
    }
}

export function getPreviewImage(previewImage){
    return{
        type : actionTypes.GET_PREVIEW_IMAGE,
        previewImage : previewImage
    }
}

export function getContent(content){
    return{
        type : actionTypes.GET_CONTENT,
        content : content
    }
}

export function getPrice(price){
    return{
        type : actionTypes.GET_PRICE,
        price : price
    }
}

export function getLicense(license){
    return {
        type : actionTypes.GET_LICENSE,
        license : license
    }
}

export function getOpenToStore(mode){
    return{
        type : actionTypes.GET_OPEN_TO_STORE,
        mode : mode
    }
}

export function getChangeToCharge(bool){
    return{
        type : actionTypes.GET_CHANGE_TO_CHARGE,
        bool : bool
    }
}