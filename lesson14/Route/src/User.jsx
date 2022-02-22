import React, { Component } from "react";
const baseUrl = "https://api.github.com/users";

class User extends Component {
  state = {
    avatar_url: null,
    name: null,
    location: null,
  };

  fetchUserInfo = (id) => {
    fetch(`${baseUrl}/${id}`)
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          avatar_url: res.avatar_url,
          name: res.name,
          location: res.location,
        });
      });
  };

  componentDidUpdate(prevProp) {
    if (this.props.match.params.userId !== prevProp.match.params.userId) {
      this.fetchUserInfo(this.props.match.params.userId);
    }
  }

  componentDidMount() {
    this.fetchUserInfo(this.props.match.params.userId);
  }

  render() {
    const { avatar_url, name, location } = this.state;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
