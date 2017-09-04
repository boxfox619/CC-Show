import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
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
    </content>
  </div>
  );
  }
}

export default AccountDialog;
