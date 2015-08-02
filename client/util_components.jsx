Login = React.createClass({
  createUser() {
    var userData = {username: Random.id(), password: Random.id()};
    Accounts.createUser(userData);
    console.log("Created user with ", userData);
  },
  login() {
    console.log("Login with ", this.state);
    Meteor.loginWithPassword(this.state.username, this.state.password)
  },
  getInitialState() {
    return {
      username: null,
      password: null
    }
  },
  onUsernameChange(evt) {
    this.setState({username: evt.target.value})
  },
  onPasswordChange(evt) {
    this.setState({password: evt.target.value})
  },
  render() {
    return <p>
      <button onClick={this.createUser}>Create User</button>
      <input type="text" name="username" placeholder="Username"
             onChange={this.onUsernameChange} value={this.state.username}/>
      <input type="text" name="password" placeholder="Password"
             onChange={this.onPasswordChange} value={this.state.password}/>
      <button onClick={this.login}>Login</button>
    </p>;
  }
});