import React from 'react';
import styles from './AssetEditorItem.css';
import ReactDOM from 'react-dom';
// import { findDOMNode } from 'react-dom';

class FreeAsset extends React.Component{
    constructor(props){
        super(props)

    }

    render(){



        return(
            <div className = {styles.AssetEditor_right}>
            <div className = {styles.select_license}>
                <span className = {styles.select_license_text}>라이센스를 선택하세요. (GPI, LGPI, BSD, MIT, CCL 중 택1)</span>
                
            </div>


             <div>
                <div className = {styles.license_content}>
                    <span className = {styles.license_text}>GPI</span>
                    <div className = {styles.dropdownButt}></div>
                </div>
            {/* <div className = {styles.dropdownContent}></div> */}
            </div>
            <div className = {styles.license_content}>
            <span className = {styles.license_text}>LGPI</span>
                <div className = {styles.dropdownButt}></div>
            </div>
            <div className = {styles.license_content}>
            <span className = {styles.license_text}>BSD</span>
                <div className = {styles.dropdownButt}></div>
            </div>
            <div className = {styles.license_content}>
            <span className = {styles.license_text}>MIT</span>
                <div className = {styles.dropdownButt}></div>
            </div>
            <div className = {styles.license_content}>
            <span className = {styles.license_text}>CCL</span>
                <div className = {styles.dropdownButt}></div>
                {/* <div className = {styles.CCL_top}></div>
                <div className = {styles.CCL_content}></div> */}
            </div>

      </div>
        );
    }


}
export default FreeAsset;
{/* <script>
    $(document).ready(function(){
        $('.license_content').on('click', function(event){
            $('.dropdownContent').toggle('show')
        })
    });
</script> */}
