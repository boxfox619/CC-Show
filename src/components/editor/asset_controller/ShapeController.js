import React from 'react';
import { connect } from 'react-redux';

class ShapeController extends React.Component{
    constructor(prop) {
        super(prop);
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeController);