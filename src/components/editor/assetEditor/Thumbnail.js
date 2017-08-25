import React from 'react';

class Thumbnail extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      src: ''
    }

    this.loadImage = this.loadImage.bind(this);
  }

  render(){
    return (
      <div onClick={this.loadImage} className={this.props.className}>
        <img src={this.state.src}/>
      </div>
    );
  }

  loadImage(){
    var fr = new FileReader();
    fr.onload = (e)=> {
      this.setState({
        ...this.state,
        src: e.target.result
      })
    };
    var inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.addEventListener("change", function(){
      fr.readAsDataURL(inputElement.files[0]);
    })
    inputElement.dispatchEvent(new MouseEvent("click"));

  }

}
export default Thumbnail;
