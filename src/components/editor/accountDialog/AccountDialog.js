import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import * as accountActions from '../../../actions/account';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './AccountDialog.css';

class AccountDialog extends React.Component{

responseGoogle(response){
  let accessToken = response.accessToken;
  let name = response.w3.ig;
  let email = response.w3.U3;
  let profile = response.w3.Paa;
  return requestLoginWithSNS('google', accessToken, name, email, profile);
}

responseFacebook(response){
  let accessToken = response.accessToken;
  let name = response.name;
  let email = response.email;
  let profile = response.picture.data.url;
  return requestLoginWithSNS('facebook', accessToken, name, email, profile);
}

  constructor(props){
    super(props);

    this.state = {
      msg: ''
    }

    this.requestLoginWithSNS = this.requestLoginWithSNS.bind(this);
  }

requestLoginWithSNS(platform, accessToken, name, email, profile){
  return axios.post('/account/'+platform, {
    accessToken,
    name,
    email,
    profile
  }).then(response => {
    this.props.updateAccountData(email, name, profile);
  }).catch(err => {
    this.setState({
      ...state,
      msg : 'SNS 인증에 실패했습니다. 다시시도해 주세요!'
    })
  });
}

  render(){
    return (
      <div className={this.props.className}>
        <div className={styles.left_img}>
          asdf
        </div>
        <div className={styles.right_contents}>
          <div className={styles.login}>
            <div className={styles.login_wrapper}>
              <p className={styles.login_title}>아이디</p>
              <input type="text" className={styles.login_input}/>
            </div>
            <div className={styles.login_wrapper}>
              <p className={styles.login_title}>비밀번호</p>
              <input type="text" className={styles.login_input} />
            </div>
            <div className={styles.login_button_wrapper}>
              <button type="submit" value="로그인" className={styles.login_button}/>
              <p className={styles.signup_button}>계정이 없으신가요?</p>
            </div>
          </div>
          <div className={styles.another_login}>
              <GoogleLogin
                style={{width:"100%", height:"40px","border-radius":"20px", marginTop:"20px" , background:"rgb(209, 72, 54)", color:"rgb(255, 255, 255)", "font-size":"16px", "font-weight":"bold", }}
                clientId="201742033376-s4258t2qoo2be1aej3lb1qturs6kgsp3.apps.googleusercontent.com"
                buttonText="구글로 로그인"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}/>
              <FacebookLogin
                style={{width:"100%", height:"40px","border-radius":"20px", marginTop:"20px" , background:"#4c69ba", color:"rgb(255, 255, 255)", "font-size":"16px", "font-weight":"bold", }}
                appId="126194874696091"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook} />
            </div>
        </div>
  </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(accountActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDialog);
