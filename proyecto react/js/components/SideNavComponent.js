class SideNavComponent extends React.Component {
  render() {
    return (
      <nav className="side-navbar">
        {/* Sidebar Header */}
        <div className="sidebar-header d-flex align-items-center">
          <div className="avatar">
            <img
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png"
              alt="..."
              className="img-fluid rounded-circle"/>
          </div>
          <div className="title">
            <h1 className="h4">Persona a cargo</h1>
            <p>Administrador</p>
          </div>
        </div>
        {/* Sidebar Navidation Menus */}
        <span className="heading">Principal</span>
        <ul className="list-unstyled">
          <li className="active">
            <a href="index.html">
              <i className="icon-home"></i>Inicio
            </a>
          </li>
          <li>
            <a href="newProduct.html">
              <i className="fa fa-plus"></i>Nuevo producto
            </a>
          </li>
          <li>
            <a href="tables.html">
              <i className="icon-grid"></i>Tablas
            </a>
          </li>
          <li>
            <a href="charts.html">
              <i className="fa fa-bar-chart"></i>Estadísticas
            </a>
          </li>
          <li>
            <a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse">
              <i className="icon-interface-windows"></i>Example dropdown
            </a>
            <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
              <li>
                <a href="#">Page</a>
              </li>
              <li>
                <a href="#">Page</a>
              </li>
              <li>
                <a href="#">Page</a>
              </li>
            </ul>
          </li>
        </ul>
        <span className="heading">Extras</span>
        <ul className="list-unstyled">
          <li>
            <a href="#">
              <i className="icon-flask"></i>Demo
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-screen"></i>Demo
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-mail"></i>Demo
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-picture"></i>Demo
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}