import React from 'react';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  state = {
    value: '',
  };

  handelChange = event => {
    this.setState({
      value: event.target.value,
    });
  };
  render() {
    const users = this.props.users.slice();
    const sortedUserList = users
      .filter(user => user.name.toLowerCase().includes(this.state.value.toLowerCase()));
    return (
      <div>
        <ul className="users">{sortedUserList}</ul>
        <Filter
          onChange={this.handelChange}
          filterText={this.state.value}
          count={sortedUserList.length}
        />
      </div>
    );
  }
}

export default UsersList;