import React from 'react';

import styles from './ShowList.css';

import Dialog from './dialog/ShowManageDialog';

import ShowItem  from './ShowItem';
import axios from 'axios';


class ShowListContext extends React.Component{

  constructor(props){
    super(props);

    this.state={
      job: undefined,
      text: undefined,
      showList: undefined
    }

    this.createShow = this.createShow.bind(this);
    this.openShow = this.openShow.bind(this);
    this.shareShow = this.shareShow.bind(this);
    this.deleteShow = this.deleteShow.bind(this);
    this.dialogCallback = this.dialogCallback.bind(this);

    this.updateShowList = this.updateShowList.bind(this);
  }

  render(){
    let headerHeight = document.getElementsByTagName('header')[0].scrollHeight;
    let renderShowList = (showList) =>{
      if(showList==undefined) return;
      if(showList.length == 0){
        return (<div onClick={this.createShow} className={styles.tempShow}>발표자료가 없습니다<br/>새 발표자료 만들기</div>);
      }else
      return showList.map((show)=>{
        return (<ShowItem key={show.id} name={show.name} thumbnail={show.thumbnail} open={()=>this.openShow(show.id)} share={()=>this.shareShow(show.id)} delete={()=>this.deleteShow(show.id)} />)
      });
    }
    let renderShowDialog = (job)=>{
      if(job==undefined) return;
      let msg = '';
      if(job=='rename'){
        msg = '변경할 이름을 입력해 주세요';
      }else if(job=='create'){
        msg = '새 발표자료의 이름을 정해주세요!';
      }else if(job=='share'){
        msg = '이 링크로 발표자료를 공유할 수 있어요!!';
      }
      return <Dialog msg={msg} text={this.state.text} callback={this.dialogCallback}/>
    }
    return (
      <div style={{'margin-top':headerHeight}} className={styles.context}>
        <div className={styles.showlist}>{renderShowList(this.state.showList)}</div>
        {renderShowDialog(this.state.job)}
      </div>
    )
  }

  updateShowList(){
    axios.get('/show/list')
    .then(response => {
      this.setState({showList : response.data});
    }).catch(err => {
    });
  }

  componentDidMount(){
    document.getElementById('createShow').addEventListener('click', this.createShow);
    this.updateShowList();
  }

  dialogCallback(result){
    if(this.state.job=='share'){
      this.setState({text: undefined});
    }else
    if(result!=undefined&&result.length>0){
      axios.post('/show/create', {name: result})
      .then(response => {
      this.updateShowList();
      }).catch(err => {
      });
    }
    this.setState({job: undefined});
  }

  renameShow(){
      this.setState({job: 'rename'});
  }

  createShow(){
    this.setState({job: 'create'});
  }

  openShow(id){
    window.location.href = '/editor/?show='+id;
  }

  shareShow(id){
    let host = "http://"+window.location.hostname;
    this.setState({job: 'share', text: host+'/show/play/?show='+id});
  }

  deleteShow(id){
    axios.post('/show/delete', {id})
    .then(response => {
      this.updateShowList();
    }).catch(err => {
    });
  }

}
export default (ShowListContext);
