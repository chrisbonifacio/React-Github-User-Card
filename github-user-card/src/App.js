import React from "react";
import "./App.scss";

import UserCard from "./components/UserCard";

class App extends React.Component {
  state = {
    user: {},
    followers: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/chrisbonifacio")
      .then(res => {
        return res.json();
      })
      .then(userData => {
        this.setState({
          user: userData
        });

        console.log("userData: ", userData);
      })
      .then(
        fetch("https://api.github.com/users/chrisbonifacio/followers")
          .then(res => {
            return res.json();
          })
          .then(followerData => {
            console.log("followerData: ", followerData);
            this.setState({
              followers: followerData
            });
          })
      )
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div class="App">
        <UserCard user={this.state.user} />
        {this.state.followers.map(follower => {
          return <UserCard user={follower} />;
        })}
      </div>
    );
  }
}

export default App;
