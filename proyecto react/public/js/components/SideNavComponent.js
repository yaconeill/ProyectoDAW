class SideNavComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="side-navbar">
        {/* Sidebar Header */}
        <div className="sidebar-header d-flex align-items-center">
          <div className="avatar">
            <img
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png"
              alt="..."
              className="img-fluid rounded-circle" />
          </div>
          <div className="title">
            <h1 className="h4">Persona a cargo</h1>
            <p>Administrador</p>
          </div>
        </div>
        {/* Sidebar Navigation Menus */}
        <span className="heading">Principal</span>
        <ul className="list-unstyled">
          <li className={this.props.home}>
            <a href={ this.props.home + 'index.html'}>
              <i className="icon-home"></i>Inicio
            </a>
          </li>
          <li className={this.props.newProduct}>
            <a href={this.props.path + 'newProduct.html'}>
              <i className="fa fa-plus"></i>Nuevo producto
            </a>
          </li>
          <li className={this.props.tables}>
            <a href={this.props.path + 'tables.html'}>
              <i className="icon-grid"></i>Tablas
            </a>
          </li>
          <li>
            <a href={this.props.charts + 'charts.html'}>
              <i className="fa fa-bar-chart"></i>Estadísticas
            </a>
          </li>
          <li className={this.props.orders}>
            <a href={this.props.path + 'readQr.html'}>
              <i className="fa fa-bar-chart"></i>Lectura de código
          </a>
          </li>
          <li className={this.props.active}>
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