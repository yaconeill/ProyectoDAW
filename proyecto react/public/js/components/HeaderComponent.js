class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <nav className="navbar">
          {/* Search Box */}
          <div className="search-box">
            <button className="dismiss">
              <i className="icon-close"></i>
            </button>
            <form id="searchForm" action="#" role="search">
              <input
                type="search"
                placeholder="What are you looking for..."
                className="form-control"/>
            </form>
          </div>
          <div className="container-fluid">
            <div
              className="navbar-holder d-flex align-items-center justify-content-between">
              {/* Navbar Header */}
              <div className="navbar-header">
                {/* Navbar Brand  */}
                <a href="index.html" className="navbar-brand">
                  <div className="brand-text brand-big">
                    <img src={this.props.path + "img/coffeAppIcon.svg"} width="64"/>
                    <span>CoffeeApp
                    </span>
                    <strong>Dashboard</strong>
                  </div>
                  <div className="brand-text brand-small">
                    <strong>CA</strong>
                  </div>
                </a>
                {/* Toggle Button */}
                <a id="toggle-btn" href="#" className="menu-btn active">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              {/* Navbar Menu  */}
              <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                {/* Search */}
                <li className="nav-item d-flex align-items-center">
                  <a id="search" href="#">
                    <i className="icon-search"></i>
                  </a>
                </li>
                {/* Notifications */}
                <li className="nav-item dropdown">
                  <a
                    id="notifications"
                    rel="nofollow"
                    data-target="#"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link">
                    <i className="fa fa-bell-o"></i>
                    <span className="badge bg-red badge-corner">0</span>
                  </a>
                  {/* <ul aria-labelledby="notifications" className="dropdown-menu">
                  <li>
                    <a rel="nofollow" href="#" class="dropdown-item">
                      <div class="notification">
                        <div class="notification-content">
                          <i class="fa fa-envelope bg-green"></i>You have 6 new messages </div>
                        <div class="notification-time">
                          <small>4 minutes ago</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow" href="#" class="dropdown-item">
                      <div class="notification">
                        <div class="notification-content">
                          <i class="fa fa-twitter bg-blue"></i>You have 2 followers</div>
                        <div class="notification-time">
                          <small>4 minutes ago</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow" href="#" class="dropdown-item">
                      <div class="notification">
                        <div class="notification-content">
                          <i class="fa fa-upload bg-orange"></i>Server Rebooted</div>
                        <div class="notification-time">
                          <small>4 minutes ago</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow" href="#" class="dropdown-item">
                      <div class="notification">
                        <div class="notification-content">
                          <i class="fa fa-twitter bg-blue"></i>You have 2 followers</div>
                        <div class="notification-time">
                          <small>10 minutes ago</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow" href="#" className="dropdown-item all-notifications text-center">
                      <strong>view all notifications </strong>
                    </a>
                  </li>
                </ul> */}
                </li>
                {/* Messages  */}
                <li className="nav-item dropdown">
                  <a
                    id="messages"
                    rel="nofollow"
                    data-target="#"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-link">
                    <i className="fa fa-envelope-o"></i>
                    <span className="badge bg-orange badge-corner">0</span>
                  </a>
                  {/* <ul aria-labelledby="notifications" className="dropdown-menu">
                  <li>
                    <a rel="nofollow" href="#" class="dropdown-item d-flex">
                      <div class="msg-profile">
                        <img src="img/avatar-1.jpg" alt="..." class="img-fluid rounded-circle">
                      </div>
                      <div class="msg-body">
                        <h3 class="h5">Jason Doe</h3>
                        <span>Sent You Message</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow" href="#" class="dropdown-item d-flex">
                      <div class="msg-profile">
                        <img src="img/avatar-2.jpg" alt="..." class="img-fluid rounded-circle">
                      </div>
                      <div class="msg-body">
                        <h3 class="h5">Frank Williams</h3>
                        <span>Sent You Message</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow" href="#" class="dropdown-item d-flex">
                      <div class="msg-profile">
                        <img src="img/avatar-3.jpg" alt="..." class="img-fluid rounded-circle">
                      </div>
                      <div class="msg-body">
                        <h3 class="h5">Ashley Wood</h3>
                        <span>Sent You Message</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow" href="#" className="dropdown-item all-notifications text-center">
                      <strong>Read all messages </strong>
                    </a>
                  </li>
                </ul> */}
                </li>
                {/* Languages dropdown     */}
                {/* <li className="nav-item dropdown"><a id="languages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link language dropdown-toggle"><img src="img/flags/16/GB.png" alt="English"><span className="d-none d-sm-inline-block">English</span></a>
                  <ul aria-labelledby="languages" class="dropdown-menu">
                    <li><a rel="nofollow" href="#" class="dropdown-item"> <img src="img/flags/16/DE.png" alt="English" class="mr-2">German</a></li>
                    <li><a rel="nofollow" href="#" class="dropdown-item"> <img src="img/flags/16/FR.png" alt="English" className="mr-2">French</a></li>
                  </ul>
                </li> */}
                {/* Logout     */}
                <li className="nav-item">
                  <a href="login.html" className="nav-link logout">Cerrar sesión
                    <i className="fa fa-sign-out"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}