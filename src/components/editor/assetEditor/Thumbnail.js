import React from 'react';
import axios from 'axios';

const defaultProps = {
  id: React.PropTypes.number.isRequired
}

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
      });
      axios.put('/store/update/',{
        id: this.props.id,
        target: 'thumbnail',
        data: e.target.result
      }).then(response => {
        console.log('test');
      });
    };
    var inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.addEventListener("change", function(){
      fr.readAsDataURL(inputElement.files[0]);
    });
    inputElement.dispatchEvent(new MouseEvent("click"));

  }

}

Thumbnail.defaultProps = defaultProps;

export default Thumbnail;
