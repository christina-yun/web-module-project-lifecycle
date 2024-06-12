import React from 'react';

class FindUserForm extends React.Component {
    
    state = {
        userInfo: {}
    }

    handleChange = (e) => {
        this.setState({
            ...this.props.mainUser.userInfo, 
            login: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getUser(this.state.login)
        console.log(this.state.login)
    }
    render(){
        // console.log('mount', this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Find User</h3>
                    <input type='text' onChange={this.handleChange}/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default FindUserForm;