import React from 'react';

class MainUser extends React.Component {

    render() {
        
        return (
            <div>
                <div className='avatar'>
                    <img src={this.props.mainUser.avatar_url} alt='profile picture'/>
                </div>
                <h3>Name: {this.props.mainUser.name}</h3>
                <p> Bio: {this.props.mainUser.bio}</p>
                <p> Profile: {this.props.mainUser.login}</p>
                <p>Followers: {this.props.mainUser.followers}</p>
                <p>Following: {this.props.mainUser.following}</p>
            </div>
        )
    }
}

export default MainUser;