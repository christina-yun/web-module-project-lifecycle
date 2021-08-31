import React from 'react';

class FindUserForm extends React.Component {

    render(){
        return (
            <div>
                <form>
                    <h3>Find User</h3>
                    <input type='text' />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default FindUserForm;