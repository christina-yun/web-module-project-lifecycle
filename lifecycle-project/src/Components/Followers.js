import React from 'react';
import axios from 'axios';
import Follower from './Follower';

class Followers extends React.Component {
    state = {
        followers: []
    }

    getFollowers = (login) => {
        axios.get(`https://api.github.com/users/${login}/followers`)
        .then(resp => {
            this.setState({followers:resp.data})
        })
        .catch(err => {
            console.error(err);
        })
    }
    componentDidMount(){
        this.getFollowers('christina-yun')
    }

    render() {
        return (
            <div>
                <h2>Followers</h2>
                {this.state.followers.map(follower => {
                    return (
                        <Follower key={follower.id} follower={follower}/>
                    )
                })}
                
            </div>
        )
    }
}

export default Followers;