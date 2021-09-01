import React from 'react';

class Follower extends React.Component {
    render(){
        return (
            <div className='follower-card'>
                <div className='follower-avatar'>
                    <img width='250' src={this.props.follower.avatar_url} alt='follower avatar' />
                </div>
                <div className='follower-info'>
                    <h4>Github Handle: {this.props.follower.login}</h4>
                </div>
            </div>
        )
    }
}

export default Follower;