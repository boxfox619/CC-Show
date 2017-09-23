import React from 'react';
import styles from './styles.css';

// import CodeMirror from 'react-codemirror';
import CodeMirror from '../codemirror/lib/codemirror';
// require('../codemirror/lib/codemirror');
import javascript from '../codemirror/mode/javascript/javascript';
// import CodeMirror from './codemirror';
import codemirrorCss from '../codemirror/lib/codemirror.css';

const createReactClass = require('create-react-class');
// require('codemirror/mode/javascript/javascript');
// import codemirrorCss from './codemirror.css';
// import css from './css';

var defaults = {
    markdown : 'asdf',
    javascript : 'var component = {adsf}'
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
    // <div className = {styles.content}>
    //             <div className = {styles.vanila}>

    //                 <div className = {styles.htmlArea}>
    //                     <div className = {styles.htmlTopbar}>
    //                         <span className = {styles.htmlTitle}>HTML</span>
    //                     </div>
    //                     <div className = {styles.htmlContent} >
    //                 <CodeMirror ref = "editor" value = {this.state.code} onChange = {this.updateCode} options = {options} autoFocus = {true} />

    //                     </div>
    //                 </div>
    //                 <div className = {styles.cssArea}>
    //                     <div className = {styles.cssTopbar}>
    //                         <span className = {styles.cssTitle}>CSS</span>
    //                     </div>
    //                     <div className = {styles.cssContent}>

    //                     </div>
    //                 </div>

    //                 <div className = {styles.jsArea}>
    //                     <div className = {styles.jsTopbar}>
    //                         <span className = {styles.jsTitle}>JS</span>
    //                     </div>
    //                     <div className = {styles.jsContent}>

    //                     </div>
    //                 </div>

    //             </div>
    //             <div className = {styles.preview}>
    //                 <div className = {styles.previewTopbar}>
    //                     <span className = {styles.previewTitle}>PREVIEW</span>
    //                 </div>
    //                 <div className = {styles.previewContent}></div>
    //             </div>
    //         </div>
    <div className="container">
    <h1>React Codemirror</h1>
    <h2><a href="http://github.com/JedWatson/react-codemirror">View project on GitHub</a></h2>
    
    <div id="app">
        <CodeMirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} autoFocus={true} />
    <div style={{ marginTop: 10 }}>
        <select onChange={this.changeMode} value={this.state.mode}>
            <option value="markdown">Markdown</option>
            <option value="javascript">JavaScript</option>
        </select>
        <button onClick={this.toggleReadOnly}>Toggle read-only mode (currently {this.state.readOnly ? 'on' : 'off'})</button>
    </div></div>
    <div className="hint">
    </div>
    <div className="footer">
        Copyright &copy; 2016 Jed Watson.
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
