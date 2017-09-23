import React from 'react';

import styles from './ShowList.css';

import ShowItem  from './ShowItem';


class ShowListContext extends React.Component{

  constructor(props){
    super(props);

    this.state={
      showList:[{name:'asdasd', id:'asasf'}]
    }

    this.openShow = this.openShow.bind(this);
    this.shareShow = this.shareShow.bind(this);
    this.deleteShow = this.deleteShow.bind(this);
  }

  render(){
    let headerHeight = document.getElementsByTagName('header')[0].scrollHeight;
    let renderShowList = (showList) =>{
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
    axios.get('/show')
    .then(response => {
      this.setState({showList : response.data.code});
    }).catch(err => {
    });
  }

  openShow(id){
    console.log('open');
  }

  shareShow(id){
    console.log('share');
  }

  deleteShow(id){
    console.log('delete');
  }

}
export default (ShowListContext);
