class NewProductComponent extends React.Component {
  render() {
    return (
      <div>
        {/* Main Navbar */}
        <HeaderComponent/>
        <div className="page-content d-flex align-items-stretch">
          {/* Side Navbar */}
          <SideNavComponent newProduct="active"/>
          <div className="content-inner">
            {/* Page Header */}
            <header className="page-header">
              <div className="container-fluid">
                <h2 className="no-margin-bottom">Nuevo producto</h2>
              </div>
            </header>
            {/* Content  */}
            <ContentComponent/> 
            <AddProductComponent/>
            {/* Page Footer */}
            <FooterComponent/>
          </div>
        </div>
        <CookiePolicyComponent/>        
      </div>
    );
  }
}