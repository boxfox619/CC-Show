import React from 'react';

class VideoController extends React.Component {
    render() {
        return ( 
            <div>
            <h1> Video </h1> 
            <br/>
                <input value={this.props.url}/>
                <input id="controller" type="checkbox" value="controller"/>
                <input id="autoplay" type="checkbox" value="autuplay"/>
                <input id="loop" type="checkbox" value="loop"/>
            </div>
        )
    }

    check(){
        if(this.props.controller) document.getElementById('controller').checked=true;
        else if(this.props.autoplay) document.getElementById('autoplay').checked=true;
        else if(this.props.loop) document.getElementById('loop').check=true;
    }
}

const mapDispathchToProps = (dispatch) => {
    return {
        setURL: (url) => {
            dispatch(actions.setAssetVideoURL(url));
        },
        setcontroller: (controller) => {
            dispatch(actions.setAssetVideoURL(controller));
        },
        setAutoplay: (autoplay) => {
            dispatch(actions.setAssetVideoURL(autoplay));
        },
        setLoop: (loop) => {
            dispatch(actions.setAssetVideoURL(loop));
        }
    }
}

export default VideoController;