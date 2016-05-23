import React from 'react';

import Sidebar from './Sidebar.jsx';

export default class Home extends React.Component {
    render() {
        return (
            <div className="columns fullscreen">
                <div className="column is-2 sidebar">
                    <Sidebar/>
                </div>
                <div className="column">
                    <h1>Content</h1>
                </div>
            </div>
        );
    }
}
