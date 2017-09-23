import React from 'react';

import styles from './ShowList.css';

import ShowItem  from './ShowItem';
import axios from 'axios';


class ShowListContext extends React.Component{

  constructor(props){
    super(props);

    this.state={
      showList:[]
    }

    this.createShow = this.createShow.bind(this);
    this.openShow = this.openShow.bind(this);
    this.shareShow = this.shareShow.bind(this);
    this.deleteShow = this.deleteShow.bind(this);
  }

  render(){
    let headerHeight = document.getElementsByTagName('header')[0].scrollHeight;
    let renderShowList = (showList) =>{
      if(showList.length == 0){
        return (<div onClick={this.createShow} className={styles.tempShow}>발표자료가 없습니다<br/>새 발표자료 만들기</div>);
      }else
      return showList.map((show)=>{
        return (<ShowItem key={show.id} name={show.name} open={()=>this.openShow(show.id)} share={()=>this.shareShow(show.id)} delete={()=>this.deleteShow(show.id)} />)
      });
    }
    return (
      <div style={{'margin-top':headerHeight}} className={styles.context}>
        {renderShowList(this.state.showList)}
      </div>
    )
  }

  componentDidMount(){
    document.getElementById('createShow').addEventListener('click', this.createShow);
    axios.get('/show')
    .then(response => {
      this.setState({showList : response.data.code});
    }).catch(err => {
    });
  }

  createShow(){
    console.log('show');
  }

  openShow(id){

  }

  shareShow(id){
    console.log('share');
  }

  deleteShow(id){
    console.log('delete');
  }

}
export default (ShowListContext);
