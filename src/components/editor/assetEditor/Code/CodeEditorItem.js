import React from 'react';
import styles from './styles.css';
// import CodeMirror from 'react-codemirror';
import CodeMirror from './CodeMirror';
const createReactClass = require('create-react-class');
// require('codemirror/mode/javascript/javascript');
// import codemirrorCss from './codemirror.css';
// import css from './css';
// import javascript from './javascript';
// import CodeMirror from './codemirror';
// import CodeMirrorCss from './codemirror.css';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

var defaults = {
    markdown : 'asdf'
}

var CodeEditorItem  = createReactClass({
    getInitialState () {
		return {
			code: defaults.markdown,
			readOnly: false,
			mode: 'markdown',
		};
	},
	updateCode (newCode) {
		this.setState({
			code: newCode
		});
	},
	changeMode (e) {
		var mode = e.target.value;
		this.setState({
			mode: mode,
			code: defaults[mode]
		});
	},
	toggleReadOnly () {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
	},
	render () {
		var options = {
			lineNumbers: true,
			readOnly: this.state.readOnly,
			mode: this.state.mode
        }
        return(
<div className = {styles.content}>
                <div className = {styles.vanila}>

                    <div className = {styles.htmlArea}>
                        <div className = {styles.htmlTopbar}>
                            <span className = {styles.htmlTitle}>HTML</span>
                        </div>
                        <div className = {styles.htmlContent} >
                    <CodeMirror ref = "editor" value = {this.state.code} onChange = {this.updateCode} options = {options} autoFocus = {true} />

                        </div>
                    </div>
                    <div className = {styles.cssArea}>
                        <div className = {styles.cssTopbar}>
                            <span className = {styles.cssTitle}>CSS</span>
                        </div>
                        <div className = {styles.cssContent}>

                        </div>
                    </div>

                    <div className = {styles.jsArea}>
                        <div className = {styles.jsTopbar}>
                            <span className = {styles.jsTitle}>JS</span>
                        </div>
                        <div className = {styles.jsContent}>

                        </div>
                    </div>

                </div>
                <div className = {styles.preview}>
                    <div className = {styles.previewTopbar}>
                        <span className = {styles.previewTitle}>PREVIEW</span>
                    </div>
                    <div className = {styles.previewContent}></div>
                </div>
            </div>
        )
    }
    });


// class CodeEditorItem extends React.Component{

    // getInitialState(){
    //     return{
    //         // code : defaultStatus.markdown,
    //         // readOnly : false,
    //         mode : 'markdown',
    //     };
    // }
    // updateCode(newCode){
    //     this.setState({
    //         // code : newCode,
    //     });
    // }
    // // changeMode(e){
    // //     var mode = e.target.value;
    // //     this.setState({
    // //         mode : mode,
    // //         code : defaults[mode]
    // //     });
    // // }
    // // toggleReadOnly(){
    // //     this.setState({
    // //         readOnly : !this.state.readOnly
    // //     }, ()=> this.refs.editor.focus());
    // // }
        
    
    // // componentWillMount(){
        
    // //     var editor = (CodeMirror(this.refs.codeeditor),{
    // //         mode : 'css'
    // //     });
    // // }

    // getInitialState () {
	// 	this.state =  {
	// 		code: defaults.markdown,
	// 		readOnly: false,
	// 		mode: 'markdown',
	// 	};
	// }
	// updateCode (newCode) {
	// 	this.setState({
	// 		code: newCode
	// 	});
	// }
	// changeMode (e) {
	// 	var mode = e.target.value;
	// 	this.setState({
	// 		mode: mode,
	// 		code: defaults[mode]
	// 	});
	// }
	// toggleReadOnly () {
	// 	this.setState({
	// 		// readOnly: !this.state.readOnly
	// 	}, () => this.refs.editor.focus());
	// }
    // render(){
    //     var options = {
    //         lineNumbers : true,
    //         // readOnly : this.state.readOnly,
    //         mode : this.state.mode
    //         // readOnly : this.state.readOnly,
    //         // mode : this.state.mode
    //     };

//         return(
//             <div className = {styles.content}>
//                 <div className = {styles.vanila}>

//                     <div className = {styles.htmlArea}>
//                         <div className = {styles.htmlTopbar}>
//                             <span className = {styles.htmlTitle}>HTML</span>
//                         </div>
//                         {/* <div className = {styles.htmlContent} >gfhjk</div> */}
//                     </div>
//                     <CodeMirror ref = "editor" value = {this.state.code} onChange = {this.updateCode} options = {options} autoFocus = {true} />
//                     <div className = {styles.cssArea}>
//                         <div className = {styles.cssTopbar}>
//                             <span className = {styles.cssTitle}>CSS</span>
//                         </div>
//                         <div className = {styles.cssContent}>

//                         </div>
//                     </div>

//                     <div className = {styles.jsArea}>
//                         <div className = {styles.jsTopbar}>
//                             <span className = {styles.jsTitle}>JS</span>
//                         </div>
//                         <div className = {styles.jsContent}>

//                         </div>
//                     </div>

//                 </div>
//                 <div className = {styles.preview}>
//                     <div className = {styles.previewTopbar}>
//                         <span className = {styles.previewTitle}>PREVIEW</span>
//                     </div>
//                     <div className = {styles.previewContent}></div>
//                 </div>
//             </div>
//         );
//     }
// }

export default CodeEditorItem;