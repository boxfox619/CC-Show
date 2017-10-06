import React from 'react';
import styles from './AssetEditorItem.css';
import ReactDOM from 'react-dom';
import newId from './newid';
// import { findDOMNode } from 'react-dom';

class FreeAsset extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isCheckedCon1 : false,
            isCheckedCon2 : false,
            isCheckedCon3 : false,
            isCheckedCon4 : false, 
            isCheckedCon5 : false,
            con2margin : 10,
            con3margin : 10,
            con4margin : 10,
            con5margin : 10,
            con6margin : 10


        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
    }
    componentWillMount() {
        this.id = newId();
        this.id2 = newId();
        this.id3 = newId();
        this.id4 = newId();
        this.id5 = newId();
    }
    render(){

        return(
            <div className = {styles.AssetEditor_right}>
            <div className = {styles.select_license}>
                <span className = {styles.select_license_text}>라이센스를 선택하세요. (GPI, LGPI, BSD, MIT, CCL 중 택1)</span>
                
            </div>


             <div>
                <div className = {styles.license_content}>
                    <input type="checkbox" name="toggle" id={this.id} className = {styles.license_input} checked = {this.state.isCheckedCon1} onChange = {this.handleChange}/>
                    <label htmlFor={this.id} className = {styles.license_label}>
                        <span className = {styles.license_text}>GPI</span>
                        <div className = {styles.dropdownButt}></div>
                    </label>
                    <div className = {styles.dropdownContent}></div>
                 </div>

                 <div className = {styles.license_content2} style = {{marginTop : this.state.con2margin+"px"}}>
                    <input type="checkbox" name="toggle" id={this.id2} className = {styles.license_input2} checked = {this.state.isCheckedCon2} onChange = {this.handleChange2} />
                    <label htmlFor={this.id2} className = {styles.license_label2}>
                        <span className = {styles.license_text}>LGPI</span>
                        <div className = {styles.dropdownButt}></div>
                    </label>
                    <div className = {styles.dropdownContent2}></div>
                 </div>

                 <div className = {styles.license_content3} style = {{marginTop : this.state.con3margin+"px"}}>
                    <input type="checkbox" name="toggle" id={this.id3} className = {styles.license_input3} checked = {this.state.isCheckedCon3} onChange = {this.handleChange3}/>
                    <label htmlFor={this.id3} className = {styles.license_label3}>
                        <span className = {styles.license_text}>BSD</span>
                        <div className = {styles.dropdownButt}></div>
                    </label>
                    <div className = {styles.dropdownContent3}></div>
                 </div>

                 <div className = {styles.license_content4} style = {{marginTop : this.state.con4margin+"px"}}>
                    <input type="checkbox" name="toggle" id={this.id4} className = {styles.license_input4} checked = {this.state.isCheckedCon4} onChange = {this.handleChange4}/>
                    <label htmlFor={this.id4} className = {styles.license_label4}>
                        <span className = {styles.license_text}>MIT</span>
                        <div className = {styles.dropdownButt}></div>
                    </label>
                    <div className = {styles.dropdownContent4}></div>
                 </div>

                 <div className = {styles.license_content5} style = {{marginTop : this.state.con5margin+"px"}}>
                    <input type="checkbox" name="toggle" id={this.id5} className = {styles.license_input5} checked = {this.state.isCheckedCon5} onChange = {this.handleChange5}/>
                    <label htmlFor={this.id5} className = {styles.license_label5}>
                        <span className = {styles.license_text}>CCL</span>
                        <div className = {styles.dropdownButt}></div>
                    </label>
                    <div className = {styles.dropdownContent5}></div>
                 </div>
    
                {/* <div className = {styles.toggleDown}></div> */}

                </div>
                
            </div>

             

     
        );
    }

    handleChange(){
        this.setState({ isCheckedCon1 : !this.state.isCheckedCon1});    
        if(this.state.isCheckedCon1 == false){
            if(this.state.isCheckedCon2 == true || this.state.isCheckedCon3 == true || this.state.isCheckedCon4 == true || this.state.isCheckedCon5 == true){
                this.setState({
                    isCheckedCon2 : false,
                    con2margin : 10,
                    isCheckedCon3 : false, 
                    con3margin : 10,
                    isCheckedCon4 : false,
                    con4margin : 10,
                    isCheckedCon5 : false
                })
            }
            this.setState({
                con2margin : 220 
            })
        }
        if(this.state.isCheckedCon1 == true){
            this.setState({
                con2margin : 10
            })
        }
    }
    handleChange2(){
        this.setState({ isCheckedCon2 : !this.state.isCheckedCon2});    
        if(this.state.isCheckedCon2 == false){
            if(this.state.isCheckedCon1 == true || this.state.isCheckedCon3 == true || this.state.isCheckedCon4 == true || this.state.isCheckedCon5 == true){
                this.setState({
                    isCheckedCon1 : false,
                    con2margin : 10,
                    isCheckedCon3 : false,
                    con3margin : 10,
                    isCheckedCon4 : false,
                    con4margin : 10,
                    isCheckedCon5 : false,
                    con5margin : 10
                })
            }
            this.setState({
                con3margin : 220 
            })
        }
        if(this.state.isCheckedCon2 == true){
            this.setState({
                con3margin : 10
            })
        }
    }
    handleChange3(){
        this.setState({ isCheckedCon3 : !this.state.isCheckedCon3});    
        if(this.state.isCheckedCon3 == false){
            if(this.state.isCheckedCon1 == true || this.state.isCheckedCon2 == true || this.state.isCheckedCon4 == true || this.state.isCheckedCon5 == true){
                this.setState({
                    isCheckedCon1 : false,
                    con2margin : 10,
                    con3margin : 10,
                    isCheckedCon2 : false,
                    con5margin : 10,
                    isCheckedCon4 : false,
                    con4margin : 10,
                    isCheckedCon5 : false,
                })
            }
            this.setState({
                con4margin : 220 
            })
        }
        if(this.state.isCheckedCon3 == true){
            this.setState({
                con4margin : 10
            })
        }
    }
    handleChange4(){
        this.setState({ isCheckedCon4 : !this.state.isCheckedCon4});    
        if(this.state.isCheckedCon4 == false){
            if(this.state.isCheckedCon1 == true || this.state.isCheckedCon2 == true || this.state.isCheckedCon3 == true || this.state.isCheckedCon5 == true){
                this.setState({
                    isCheckedCon1 : false,
                    isCheckedCon2 : false,
                    isCheckedCon3 : false,
                    isCheckedCon5 : false,
                    con2margin : 10,
                    con3margin : 10,
                    con3margin : 10,
                    con4margin : 10
                })
            }
            this.setState({
                con5margin : 220 
            })
        }
        if(this.state.isCheckedCon4 == true){
            this.setState({
                con5margin : 10
            })
        }
    }
    handleChange5(){
        this.setState({ isCheckedCon5 : !this.state.isCheckedCon5});    
        if(this.state.isCheckedCon5 == false){
            if(this.state.isCheckedCon1 == true || this.state.isCheckedCon2 == true || this.state.isCheckedCon3 == true || this.state.isCheckedCon4 == true){
                this.setState({
                    isCheckedCon1 : false,
                    isCheckedCon2 : false,
                    isCheckedCon3 : false,
                    isCheckedCon4 : false,
                    con2margin : 10,
                    con3margin : 10,
                    con3margin : 10,
                    con4margin : 10
                })
            }
            this.setState({
                con6margin : 220 
            })
        }
        if(this.state.isCheckedCon5 == true){
            this.setState({
                con6margin : 10
            })
        }
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
