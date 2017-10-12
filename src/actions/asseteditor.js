export const actionTypes = {
  SET_TITLE : 'SET_TITLE',
  SET_HTML : 'SET_HTML',
  SET_CSS : 'SET_CSS',
  SET_JS : 'SET_JS',
  SET_PREVIEW : 'SET_PREVIEW',
  GET_PREVIEW_IMAGE : 'GET_PREVIEW_IMAGE' 
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
