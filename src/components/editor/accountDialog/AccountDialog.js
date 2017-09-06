import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import * as accountActions from '../../../actions/account';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
  return (<div className={this.props.className}>
    <header>
      <h1>ASSET EDITOR</h1>
    </header>
    <content>
    <GoogleLogin
      clientId="201742033376-s4258t2qoo2be1aej3lb1qturs6kgsp3.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
    <FacebookLogin
      appId="126194874696091"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook} />,
    </content>
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
