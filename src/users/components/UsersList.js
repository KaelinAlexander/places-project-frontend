import React from 'react'
import './UsersList.css'
import UserItem from './UserItem'

const UsersList = (props) => {
    if (props.users.length === 0) {
        return (
            <div className="center">
                <h2>No Users Found</h2>
            </div>
        )
    } else {
        return (
            <ul>
              {props.users.map(user => (                
                <UserItem 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.places}
                />
              ))}  
            </ul>
        )
    }
};
 
export default UsersList;