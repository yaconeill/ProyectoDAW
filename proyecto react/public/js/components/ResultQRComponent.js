class ResultQRComponent extends React.Component {
  componentDidMount() {
    $('#toggle-btn').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');

      $('.side-navbar').toggleClass('shrinked');
      $('.content-inner').toggleClass('active');
      $(document).trigger('sidebarChanged');

      if ($(window).outerWidth() > 1183) {
        if ($('#toggle-btn').hasClass('active')) {
          $('.navbar-header .brand-small').hide();
          $('.navbar-header .brand-big').show();
        } else {
          $('.navbar-header .brand-small').show();
          $('.navbar-header .brand-big').hide();
        }
      }

      if ($(window).outerWidth() < 1183) {
        $('.navbar-header .brand-small').show();
      }
    });
  }
  render() {
    return (
      <div>
        {/* Main Navbar */}
        <HeaderComponent />
        <div className="page-content d-flex align-items-stretch">
          {/* Side Navbar */}
          <SideNavComponent home="../" path=""  />
          <div className="content-inner">
            {/* Page Header */}
            <header className="page-header">
              <div className="container-fluid">
                <h2 className="no-margin-bottom">Panel de control</h2>
              </div>
            </header>
            {/* Content  */}
            {/* <ContentComponent /> */}
            <ResultComponent />
            {/* Page Footer */}
            <FooterComponent />
          </div>
        </div>
        <CookiePolicyComponent />
      </div>
    );
  }
}