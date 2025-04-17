import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Channels</h2>
            <ul>
                <li># general</li>
                <li># random</li>
                <li># announcements</li>
            </ul>
            <h2>Direct Messages</h2>
            <ul>
                <li>User1</li>
                <li>User2</li>
                <li>User3</li>
            </ul>
        </div>
    );
};

export default Sidebar;