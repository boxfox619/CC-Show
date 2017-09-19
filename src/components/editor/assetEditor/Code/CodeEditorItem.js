import React from 'react';
import styles from './styles.css';

class CodeEditorItem extends React.Component{
    render(){
        return(
            <div className = {styles.content}>
                <div className = {styles.vanila}>

                    <div className = {styles.htmlArea}>
                        <div className = {styles.htmlTopbar}>
                            <span className = {styles.htmlTitle}>HTML</span>
                        </div>
                        <div className = {styles.htmlContent}></div>
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
        );
    }
}

export default CodeEditorItem;