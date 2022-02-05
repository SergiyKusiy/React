import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    showSpinner: false,
  };

  handelLogin = () => {
    this.setState({ showSpinner: true });
    setTimeout(() => {
      this.setState({ showSpinner: false });
      this.setState({ isLoggedIn: true });
    }, 2000);
  };

  handelLogout = () => {
    this.setState({
      isLoggedIn: false,
      showSpinner: false,
    });
  };

  render() {
    if (this.state.showSpinner) {
      return <Spinner size={25} />;
    }
    return this.state.isLoggedIn ? (
      <Logout onLogout={this.handelLogout} />
    ) : (
      <Login onLogin={this.handelLogin} />
    );
  }
}
export default Auth;
