import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {id: 'u1', name: 'Kaelin', image: 'https://cdn.bulbagarden.net/upload/thumb/f/f4/035Clefairy.png/375px-035Clefairy.png', places: 1 },
        {id: 'u2', name: 'Justin', image: 'https://cdn.bulbagarden.net/upload/thumb/3/3e/039Jigglypuff.png/375px-039Jigglypuff.png', places: 4},
        {id: 'u3', name: 'Alex', image: 'https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/375px-009Blastoise.png', places: 10}
    ]

    return ( 
        <UsersList users={USERS} />
     );
}
 
export default Users;