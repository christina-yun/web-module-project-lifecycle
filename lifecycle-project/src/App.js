import React from 'react';
import axios from 'axios';
import FindUserForm from './Components/FindUserForm';
import MainUser from './Components/MainUser';
import Followers from './Components/Followers';

class App extends React.Component {

  state = {
    userInfo: {},
    followerInfo: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/christina-yun')
    .then(resp => {
      console.log(resp.data)
      this.setState(resp.data)
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Who knows whom</h1>
        <FindUserForm mainUser={this.state}/>
        <MainUser mainUser={this.state}/>
        <Followers />
      </div>
    );
  }
}

export default App;
