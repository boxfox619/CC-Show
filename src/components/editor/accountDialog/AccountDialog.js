import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

const responseGoogle = (response) => {
  let accessToken = response.accessToken;
  let name = response.w3.ig;
  let email = response.w3.U3;
  let profile = response.w3.Paa;
  requestLoginWithSNS('google', accessToken, name, email, profile);
}

const responseFacebook = (response) => {
  let accessToken = response.accessToken;
  let name = response.name;
  let email = response.email;
  let profile = response.picture.data.url;
  requestLoginWithSNS('facebook', accessToken, name, email, profile);
}

const requestLoginWithSNS = (platform, accessToken, name, email, profile) =>{
  axios.post('/account/'+platform, {
    accessToken,
    name,
    email,
    profile
  }).then(response => {
    console.log(response);
  });
}

class AccountDialog extends React.Component{

  render(){
    console.log('render');
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

export default AccountDialog;
