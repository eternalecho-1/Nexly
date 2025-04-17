import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import UserList from './components/UserList';

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            <UserList />
            <Chat />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));