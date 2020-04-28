import React, { Component } from 'react';
import Axios from 'axios';
import UserForm from './Components/userForm'

//https://api.github.com/users/john

class App extends Component {
  state = {
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    Axios.get(`https://api.github.com/users/${user}`).then(res => {
      const repos = res.data.public_repos;
      this.setState({repos});
      
    })
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>
            HTTP Calls in React
          </h1>
          
        </header>
        <UserForm getUser={this.getUser}/>
        {this.state.repos ? <p>Number of repos: {this.state.repos}</p> : <p>Please enter a username</p>}
      </div>
    );
  }
}

export default App;
