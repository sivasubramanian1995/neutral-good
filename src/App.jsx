import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const App = () => (
  <div className="App">
    <div className="container outerDesign">
      <header>

        <a href="/#" className="title-logo">
          <img src="/images/logo.png" className="logo" alt="Logo Alt text" />
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
            <a href="/#"><img src="/images/settings.svg" className="nav-icons" alt="Settings" /></a>
            <a href="/#"><img src="/images/envelope.svg" className="nav-icons" alt="Inbox" /></a>
            <a href="/#"><img src="/images/notification.svg" className="nav-icons" alt="Notifications" /></a>
            <a href="/#" className="username">John Dead</a>
            <a href="/#"><img src="/images/logout.svg" className="nav-icons" alt="Log-out" /></a>
          </nav>
        </navigation>
      </header>

      <div className="main">
        <div className="section">

          <div className="mainacc">
            <div className="box-container">
              <div className="box-header">
                <div>Main account</div>
                <div>Available funds</div>
              </div>
            </div>

            <div className="box-container-2">
              <div className="box-content">
                <div className="account-details">
                  <span className="account-title">WEBTRANS SAVINGS ACCOUNT</span>
                  <span className="account-no">45 8765 1454 4512 6784 1542 6548</span>
                </div>
                <div>
                  <span className="account-balance">98.547,</span>
                  <span className="account-balance-subset">45</span>
                  <span className="account-balance-currency">$</span>
                </div>
              </div>
            </div>

            <div className="box-container">
              <div className="box-content-cta">
                <a href="/#" className="btn-large btn-primary">Transfer money</a>
                <a href="/#" className="btn-large btn-secondary">Link accounts</a>
                <div />
              </div>
            </div>
          </div>
          <div className="ordersacc">
            <div className="box-container">
              <div className="box-header text-white ordersacc-title">
                <div>Define standing orders</div>
                <div className="squareGroup">
                  <div className="square-light" />
                  <div className="square-white" />
                  <div className="square-light" />
                </div>
              </div>
            </div>
            <div className="box-container">
              <p className="text-white-100 para">
                {message}
              </p>
            </div>
            <div className="box-container-2">
              <a href="/#" className="btn-large btn-secondary">Define standing orders</a>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="foursection">
            <div className="fs-container">
              <div className="fs-head">
                <div className="fs-head-title">
                  <div className="fs-head-bold">Santander</div>
                  <div className="fs-head-card">
                    <span className="fs-cardno">88 **** 9448</span>
                    <img className="fs-cardcopy" src="/images/copy.svg" alt="Copy" />
                  </div>
                </div>
                <div className="fs-head-logo"><img src="/images/sant.png" alt="Santander" /></div>
              </div>
              <div className="fs-footer-cash">
                <div>
                  <span className="fs-cash">12.220,</span>
                  <span className="fs-cash-seggr">65</span>
                  <span className="fs-cash-currency">$</span>
                </div>
                <div className="fs-footer-menu"><img src="/images/menu.svg" alt="menu" /></div>
              </div>
            </div>
          </div>
          <div className="foursection">
            <div className="fs-container">
              <div className="fs-head">
                <div className="fs-head-title">
                  <div className="fs-head-bold">CitiBank</div>
                  <div className="fs-head-card">
                    <span className="fs-cardno">45 **** 8854</span>
                    <img className="fs-cardcopy" src="/images/copy.svg" alt="Copy" />
                  </div>
                </div>
                <div className="fs-head-logo"><img src="/images/sant.png" alt="CitiBank" /></div>
              </div>
              <div className="fs-footer-cash">
                <div>
                  <span className="fs-cash">25.070,</span>
                  <span className="fs-cash-seggr">65</span>
                  <span className="fs-cash-currency">$</span>
                </div>
                <div className="fs-footer-menu"><img src="/images/menu.svg" alt="menu" /></div>
              </div>
            </div>
          </div>
          <div className="foursection">
            <div className="fs-container">
              <div className="fs-head">
                <div className="fs-head-title">
                  <div className="fs-head-bold">Deutsche bank</div>
                  <div className="fs-head-card">
                    <span className="fs-cardno">67 **** 6821</span>
                    <img className="fs-cardcopy" src="/images/copy.svg" alt="Copy" />
                  </div>
                </div>
                <div className="fs-head-logo"><img src="/images/sant.png" alt="CitiBank" /></div>
              </div>
              <div className="fs-footer-cash">
                <div>
                  <span className="fs-cash">570,</span>
                  <span className="fs-cash-seggr">00</span>
                  <span className="fs-cash-currency">$</span>
                </div>
                <div className="fs-footer-menu"><img src="/images/menu.svg" alt="menu" /></div>
              </div>
            </div>
          </div>
          <div className="foursection">
            <div className="fs-container">
              <div className="fs-head">
                <div className="fs-head-title">
                  <div className="fs-head-bold">Credit Agricole</div>
                  <div className="fs-head-card">
                    <span className="fs-cardno">55 **** 7655</span>
                    <img className="fs-cardcopy" src="/images/copy.svg" alt="Copy" />
                  </div>
                </div>
                <div className="fs-head-logo"><img src="/images/sant.png" alt="CitiBank" /></div>
              </div>
              <div className="fs-footer-cash">
                <div>
                  <span className="fs-cash">2.680,</span>
                  <span className="fs-cash-seggr">50</span>
                  <span className="fs-cash-currency">$</span>
                </div>
                <div className="fs-footer-menu"><img src="/images/menu.svg" alt="menu" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="transactionsection" />
          <div className="expensesection" />
        </div>
      </div>
      {/* Main Container ends here */}
      <div className="footer">Inspired by dribble ♥</div>
    </div>
  </div>
);

export default hot(module)(App);
