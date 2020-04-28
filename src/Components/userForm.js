import React from 'react'

const UserForm = (props) => {
    return (
    <form onSubmit={props.getUser}>
        <input type="text" name="username"/>
        <button type="submit">Submit</button>
    </form>
    )
    
}

export default UserForm;