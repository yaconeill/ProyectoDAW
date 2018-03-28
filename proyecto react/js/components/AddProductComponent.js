class AddProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: JSON.parse(localStorage.getItem('productos')),
      value: '?',
      show: false,
    };
  }
  render() {
    var types = Object.keys(this.state.productList.productos),
      MakeType = (type) => { return <option key={type} value={type}>{type}</option>; },
      productsKey = '', ShowProduct = '', showIngredientes = '',
      ingredientsKey = Object.keys(this.state.productList.ingredientes);
    if (this.state.value != '?') {
      productsKey = Object.keys(this.state.productList.productos[this.state.value]),
        ShowProduct = (p) => { return <option key={p} value={p}>{this.state.productList.productos[this.state.value][p].name}</option> };
      showIngredientes = (i) => {
        if(this.state.productList.ingredientes[i].type == 'pan'){
          return (          
            <div class="i-checks">
              <input id={'radio-'+i} type="radio" key={'ing-'+i} value={'ing-'+i} name="a" class="radio-template" />
              <label htmlFor={'radio-'+i}>{this.state.productList.ingredientes[i].type} - {this.state.productList.ingredientes[i].name}</label>
            </div>
          );
        }
        else 
        return (          
          <div class="i-checks">
            <input id={'check-'+i} type="checkbox" key={'ing-'+i} value={'ing-'+i} class="checkbox-template" />
            <label htmlFor={'check-'+i}>{this.state.productList.ingredientes[i].type} - {this.state.productList.ingredientes[i].name}</label>
          </div>
        );
      }
    }
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
                        <select name="type" className="form-control"
                          onChange={event => this.setState({ value: event.target.value, show: true })}
                          value={this.state.value}>
                          <option>Seleccionar uno ...</option>
                          {types.map(MakeType)}
                        </select>
                      </div>
                    </div>
                    {<SelectProduct show={this.state.show} productsKey={productsKey} showProduct={ShowProduct} />}
                    {<ShowIngredients show={this.state.show} ingredientsKey={ingredientsKey} showIngredientes={showIngredientes} />}
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
class SelectProduct extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.show)
      return (
        <div className="form-group row">
          <label className="col-sm-3 form-control-label">Producto</label>
          <div className="col-sm-9 select">
            <select name="product" className="form-control">
              <option>Seleccionar uno ...</option>
              {this.props.productsKey.map(this.props.showProduct)}
            </select>
          </div>
        </div>
      );
    else
      return '';
  }
}

class ShowIngredients extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.show)
      return (
        <div class="form-group row">
          <label class="col-sm-3 form-control-label">Ingredientes</label>
          <div class="col-sm-9">
            {this.props.ingredientsKey.map(this.props.showIngredientes)}
          </div>
        </div>
      );
    else
      return '';
  }
}