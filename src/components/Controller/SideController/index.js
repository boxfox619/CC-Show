import React from 'react';
import GradientButton from './GradientButton/index';

import styles from './style.css';

const propTypes = {
  buttonMap: React.PropTypes.array.isRequired,
  account: {
    name: React.PropTypes.string,
    email: React.PropTypes.string,
    profile: React.PropTypes.string
  }
}

const renderGroup = (groups) => {
    return groups.map((group) =>{
        return (<div>
          <span className={styles.hr}/>
          {
            group.map((btn) => {
              <GradientButton label={btn.label} onClick={btn.action}/>
            })
          }
        </div>);


  });
}

class SideController extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <div style={{'width': '80%', 'margin': '20px 10%'}}>
                    <div className={styles.profile}>
                        <div className={styles.profileImgCover}>
                            <img className={styles.profileImg} src={this.props.profile}/>
                        </div>
                        <div className={styles.textWrap}>
                            <div className={styles.name}>{this.props.name}</div>
                            <div className={styles.subName}>{this.props.email}</div>
                        </div>
                    </div>
                  {renderGroup(this.props.buttonMap)}
                </div>
                <div className={styles.logo}/>
            </div>
        );
    }
}

SideController.propsTypes = propTypes;

export default SideController;
