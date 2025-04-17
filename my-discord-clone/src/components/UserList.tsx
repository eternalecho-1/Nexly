import React from 'react';

const UserList: React.FC<{ users: string[] }> = ({ users }) => {
    return (
        <div className="user-list">
            <h2>Online Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;