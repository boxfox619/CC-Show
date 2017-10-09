export const SET_TITLE = 'SET_TITLE';
export const SET_HTML = 'SET_HTML';
export const SET_CSS = 'SET_CSS';
export const SET_JS = 'SET_JS';


export function setTitle(title){
    return{
        type : SET_TITLE,
        title : title
    }
}

export function setHtml(htmlsource){
    return{
        type : SET_HTML,
        htmlsource : htmlsource
    }
}

export function setCSS(csssource){
    return{
        type : SET_CSS,
        csssource : csssource
    }
}

export function setJS(jssource){
    return{
        type : SET_JS,
        jssource : jssource
    }
}

