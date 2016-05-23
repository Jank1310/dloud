import React from 'react';

export default class Sidebar extends React.Component {
    render() {
        return (
          <aside class="menu sidebar">
            <p className="menu-label">
              Dloud
            </p>
            <ul className="menu-list">
              <li><a href="#">Inbox</a></li>
              <li><a href="#">Archive</a></li>
            </ul>
            <p className="menu-label">
              Account
            </p>
            <ul className="menu-list">
              <li><a href="#">Settings</a></li>
            </ul>
          </aside>
        );
    }
}
