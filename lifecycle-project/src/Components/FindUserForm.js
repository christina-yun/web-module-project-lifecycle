import React from 'react';

class FindUserForm extends React.Component {

    handleChange = (e) => {
        console.log(e.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }
    render(){
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