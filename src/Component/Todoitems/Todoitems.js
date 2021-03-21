import React from 'react';
import './Todoitems.css'

const Todoitems = (props) => {
    const { users, deleteItem } = props;
    let length = users.length
    const ListUsers = length ? (users.map(user => {
        return (
            <div className="listItems" key={user.id}>
                <span className="name">{user.name}</span>
                <span className="age">{user.age}</span>
                <span className="action icon" onClick={() => deleteItem(user.id)}>&times;</span>
            </div>
        )
    })) : (
        <p>There is no users to show</p>
    )

    return (
        <div className="listItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">X</span>
            </div>
            {ListUsers}
        </div>
    );
}

export default Todoitems;