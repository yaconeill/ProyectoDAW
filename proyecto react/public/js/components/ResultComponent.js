class ItemComponent extends React.Component {
    constructor(props) {
		super(props);
	}
    render() {
        return (
            <div className="form-group">
                <input type="text" value={this.props.name} className="form-control" readOnly/>
            </div>
        );
    }
}

class ResultComponent extends React.Component {
    render() {
        loadData();
        let db = load('productos');
        let object = downStringLocalStorage('pedidoId');
        let list = Object.values(db.pedidos[object]);
        let listProducts = [];
        list.forEach(idProd => {
            var h = Object.keys(db.productos);
            h.forEach((element, i) => {
                if (element.substring(0, 3).toLowerCase() == idProd.substring(0, 3)) {
                    listProducts.push(db.productos[element][idProd]);
                }
            });
        });
        return (
            <div className="col-lg-6 mt-3 mx-auto">
                <div className="card">
                    <div className="card-close">
                        <div className="dropdown">
                            <button
                                type="button"
                                id="closeCard1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                className="dropdown-toggle">
                                <i className="fa fa-ellipsis-v"></i>
                            </button>
                            <div
                                aria-labelledby="closeCard1"
                                className="dropdown-menu dropdown-menu-right has-shadow">
                                <a href="#" className="dropdown-item remove">
                                    <i className="fa fa-times"></i>
                                    Close
                                </a>
                                <a href="#" className="dropdown-item edit">
                                    <i className="fa fa-gear"></i>
                                    Edit
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-header d-flex align-items-center">
                        <h3 className="h4">Su pedido es:</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            {listProducts
                                .map(function (element, index) {
                                    return <ItemComponent name={element.name}/>;
                                })}
                            <div className="form-group">
                                <input type="submit" value="Confirmar pedido" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}