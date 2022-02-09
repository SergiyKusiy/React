import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount = () => {
    window.addEventListener('online', this.onStatus);
    window.addEventListener('ofline', this.onStatus);
  };

  componentWillUnmount = () => {
    window.removeEventListener('online', this.onStatus);
    window.removeEventListener('ofline', this.onStatus);
  };

  onStatus = () => {
    this.setState({ status: 'offline' });
  };

  onStatus = () => {
    this.setState({ status: 'online' });
  };

  render() {
    const { status } = this.state;
    if (status === 'online') {
      return <div className="status">{status}</div>;
    }
    if (status === 'offline') {
      return <div className="status status_offline">{status}</div>;
    }
  }
}

export default ConnectionStatus;
