class AddProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: JSON.parse(localStorage.getItem('productos')),
    };
    // const types = Object.keys(this.state.productList.productos);
  }
  render() {
    var types = Object.keys(this.state.productList.productos),
    MakeType = (type) => {
    return <option key={type} value={type}>{type}</option>;
    };
    
    return (
      <section className="forms">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-header d-flex align-items-center">
                  <h3 className="h4">Añadir producto</h3>
                </div>
                <div className="card-body">
                  <form className="form-horizontal">
                    <div className="row">
                      <label className="col-sm-3 form-control-label">Nuevo producto</label>
                      <div className="col-sm-9">
                        <div className="form-group-material">
                          <input id="product-name" type="text" name="product-name" required className="input-material" />
                          <label htmlFor="product-name" className="label-material">Nombre</label>
                        </div>
                        <div className="form-group-material">
                          <input id="product-descript" type="text" name="product-descript" required className="input-material" />
                          <label htmlFor="product-descript" className="label-material">Descripción</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 form-control-label">Precio</label>
                      <div className="col-sm-9">
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend"><span className="input-group-text">€</span></div>
                            <input type="number" min="0" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 form-control-label">Tipo de producto</label>
                      <div className="col-sm-9 select">
                        <select name="account" className="form-control">
                          <option>Seleccionar uno ...</option>                        
                          {types.map(MakeType)}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="fileInput" className="col-sm-3 form-control-label">Añadir imagen</label>
                      <div className="col-sm-9">
                        <input id="fileInput" type="file" className="form-control-file" />
                        <div className="imgSample"></div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-9 offset-sm-3">
                        <input type="submit" value="Guardar" className="btn btn-primary" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}