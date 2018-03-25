class AddProductComponent extends React.Component {
    render() {
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
                              <input id="register-name" type="text" name="registerName" required className="input-material"/>
                              <label htmlFor="register-name" className="label-material">Nombre</label>
                            </div>
                            <div className="form-group-material">
                              <input id="register-email" type="text" name="registerDescript" required className="input-material"/>
                              <label htmlFor="register-email" className="label-material">Descripción</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-3 form-control-label">Tipo de producto</label>
                          <div className="col-sm-9 select">
                            <select name="account" className="form-control">
                              <option>Seleccionar uno ...</option>
                              <option>Bocadillo</option>
                              <option>Sandwich</option>
                              <option>Cruasant</option>
                              <option>Bedida</option>
                              <option>Frutas</option>
                              <option>Snack</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label htmlFor="fileInput" className="col-sm-3 form-control-label">Añadir imagen</label>
                          <div className="col-sm-9">
                            <input id="fileInput" type="file" className="form-control-file"/>
                            <div className="imgSample"></div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-9 offset-sm-3">
                            <input type="submit" value="Guardar" className="btn btn-primary"/>
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