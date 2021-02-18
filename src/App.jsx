import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

// const message = 'Welcome to neutral-good';
const App = () => (
  <div className="App">
    <div className="container outerDesign">
      <header>

        <a href="/#" className="title-logo">
          <img src="/public/images/logo.png" className="logo" alt="Logo Alt text" />
          <div className="appTitle">WebTrans</div>
        </a>
        <navigation>
          <nav className="menuGroup">
            <a href="/#" className="active">My Dashboard</a>
            <a href="/#">Transactions</a>
            <a href="/#">Services</a>
            <a href="/#">Investments</a>
          </nav>
          <nav className="profileGroup">
            <a href="/#"><img src="/public/images/settings.svg" className="nav-icons" alt="Settings" /></a>
            <a href="/#"><img src="/public/images/envelope.svg" className="nav-icons" alt="Inbox" /></a>
            <a href="/#"><img src="/public/images/notification.svg" className="nav-icons" alt="Notifications" /></a>
            <a href="/#" className="username">John Dead</a>
            <a href="/#"><img src="/public/images/logout.svg" className="nav-icons" alt="Log-out" /></a>
          </nav>
        </navigation>
      </header>

      <div className="main">
        <div className="section">
          <div className="mainacc" />
          <div className="ordersacc" />
        </div>
        <div className="section">
          <div className="foursection" />
          <div className="foursection" />
          <div className="foursection" />
          <div className="foursection" />
        </div>
        <div className="section">
          <div className="transactionsection" />
          <div className="expensesection" />
        </div>
      </div>
      {/* Main Container ends here */}
    </div>
  </div>
);

export default hot(module)(App);
