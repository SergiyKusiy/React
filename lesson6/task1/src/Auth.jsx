import React from "react";
import Greeting from './Greeting';
import Login from './Login.jsx';
import Logout from './Logout.jsx';


class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    let button = this.state.isLoggedIn
      ? <Logout onLogout={this.handleLogout} />
      : <button onLogin={this.handleLogin} />;

    // if (this.state.isLoggedIn) {
    //   button = <button onClick={this.handleLogout}>Logout</button>;
    // } else {
    //   button = <button onClick={this.handleLogin}>Login</button>;
    // }

    return (
      <div className="panel">
        <Greeting isLoggedIn={ this.state.isLoggedIn }/>
        <div>
          {button}
        </div>
      </div>
    );
  }
}

export default Auth;