import React from "react";

export default class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.props.user.avatar_url} />
        <h2>{this.props.user.login}</h2>
        <p></p>
      </div>
    );
  }
}
