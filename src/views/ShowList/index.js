import React from 'react';

import styles from './style.css';

import Dialog from './components/Dialog';

import ShowItem  from './components/ShowItem';
import * as Request from './services/request';


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
        return (<div className={styles.tempShow}
          onClick={this.createShow}
        >발표자료가 없습니다<br />새 발표자료 만들기</div>);
      }else
        return showList.map((show)=>{
          return (<ShowItem delete={()=>this.deleteShow(show.id)}
            key={show.id}
            name={show.name}
            open={()=>this.openShow(show.id)}
            share={()=>this.shareShow(show.id)}
            thumbnail={show.thumbnail}
          />)
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
      return <Dialog callback={this.dialogCallback}
        msg={msg}
        text={this.state.text}
      />
    }
    return (
      <div className={styles.context}
        style={{'marginTop':headerHeight}}
      >
        <div className={styles.showlist}>{renderShowList(this.state.showList)}</div>
        {renderShowDialog(this.state.job)}
      </div>
    )
  }

  updateShowList(){
    let _self = this;
    Request.loadShowList(function(response){
      if(response.result)
        _self.setState({showList : response.data});
    });
  }

  componentDidMount(){
    document.getElementById('createShow').addEventListener('click', this.createShow);
    this.updateShowList();
  }

  dialogCallback(result){
    let _self = this;
    if(this.state.job=='share'){
      this.setState({text: undefined});
    }else
    if(result!=undefined&&result.length>0){
      Request.createShow(result, function(response){
        if(response.result)
          _self.updateShowList();
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
    let host = 'http://'+window.location.hostname;
    this.setState({job: 'share', text: host+'/show/play/?show='+id});
  }

  deleteShow(id){
    let _self = this;
    Request.deleteShow(id, function(result){
      if(result)
        _self.updateShowList();
    });
  }

}
export default (ShowListContext);
