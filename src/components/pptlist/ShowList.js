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
      showList:[]
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
      if(showList.length == 0){
        return (<div onClick={this.createShow} className={styles.tempShow}>발표자료가 없습니다<br/>새 발표자료 만들기</div>);
      }else
      return showList.map((show)=>{
        return (<ShowItem key={show.id} name={show.name} open={()=>this.openShow(show.id)} share={()=>this.shareShow(show.id)} delete={()=>this.deleteShow(show.id)} />)
      });
    }
    let renderShowDialog = (job)=>{
      if(job==undefined) return;
      let msg = '';
      if(job=='rename'){
        msg = '변경할 이름을 입력해 주세요';
      }else if(job=='create'){
        msg = '새 발표자료의 이름을 정해주세요!';
      }
      return <Dialog msg={msg} callback={this.dialogCallback}/>
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
    window.location.href = '/?show='+id;
  }

  shareShow(id){
    console.log('share');
  }

  deleteShow(id){
    console.log('delete');
  }

}
export default (ShowListContext);
