import React from 'react';

class MainUser extends React.Component {

    render() {
        return (
            <div>
                <div className='avatar'>
                    <img src={this.props.mainUser.userInfo.avatar_url} alt='avatar'/>
                </div>
                <div className='card-Info'>
                    <h3>Name: {this.props.mainUser.userInfo.name}</h3>
                    <p> Bio: {this.props.mainUser.userInfo.bio}</p>
                    <p> Profile: {this.props.mainUser.userInfo.login}</p>
                    <p>Followers: {this.props.mainUser.userInfo.followers}</p>
                    <p>Following: {this.props.mainUser.userInfo.following}</p>
                </div>
                
            </div>
        )
    }
}

export default MainUser;