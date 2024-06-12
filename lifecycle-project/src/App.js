import React from 'react';
import axios from 'axios';
import FindUserForm from './Components/FindUserForm';
import MainUser from './Components/MainUser';
import Followers from './Components/Followers';

class App extends React.Component {

  state = {
    userInfo: {},
    followers: []
  }

  getUser = (login) => {
    axios.get(`https://api.github.com/users/${login}`)
    .then(resp => {
      this.setState({
        ...this.state,
        userInfo: resp.data})
    })
    .catch(err => {
      console.error(err);
    })
  }

  componentDidMount(){
    this.getUser('christina-yun')
  }

  render() {
    
    return (
      <div className="App">
        <h1>Who Knows Whom</h1>
        <FindUserForm mainUser={this.state} getUser={this.getUser} />
        <MainUser mainUser={this.state}/>
        <Followers />
      </div>
    );
  }
}

export default App;
