class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: JSON.parse(localStorage.getItem('productos')),
        };
    }
    componentDidMount() {
        $('#imgZoom').on('show.bs.modal', function (e) {

            let name = $(e.relatedTarget).data('name');
            let imgSrc = $(e.relatedTarget).data('img');
            let type = $(e.relatedTarget).data('type');

            $(e.currentTarget).find('#productName').text(name);
            if (imgSrc !== '')
                $(e.currentTarget).find('#img').attr('src', imgSrc);
        });
    }
    render() {
        var typesProduct = Object.keys(this.state.productList.productos).filter(i => i !== 'Bebidas');
        var typesDrink = Object.keys(this.state.productList.productos.Bebidas);
        var MakeType = (type, idx) => {
            return <CardComponent type={type} key={`${type}-${idx}`} productList={this.state.productList.productos} />
        };
        var MakeTypeDrink = (type, idx) => {
            return <CardComponent type={type} key={`${type}-${idx}`} productList={this.state.productList.productos.Bebidas} />
        }
        var productsKey = '', ShowProduct = '', showIngredientes = '',
            ingredientsKey = Object.keys(this.state.productList.ingredientes);
        return (
            <section className="tables">
                <div className="container-fluid">
                    <div className="row">
                        {typesProduct.map(MakeType)}
                        {typesDrink.map(MakeTypeDrink)}
                    </div>
                </div>
                {/* <!-- Modal--> */}
                <div id="imgZoom" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" className="modal fade text-left">
                    <div role="document" className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 id="productName" className="modal-title">Nombre del producto</h4>
                                <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                            </div>
                            <div className="modal-body">
                                <img src={'../img/noDisponible.png'} id="img" style={{ width: '29rem' }} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" data-dismiss="modal" className="btn btn-secondary">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    hasIngredient(list, p, idx) {
        if (list)
            return (<IngredientsComponent key={`ingredient-${idx}`}
                ingredients={this.props.productList[this.props.type][p].ingredients}
                productList={this.props.productList} />);
        else return '';
    }
    render() {
        let productsKeys = Object.keys(this.props.productList[this.props.type]);
        let MakeProduct = (p, idx) => {
            return (
                <tr key={`row${idx}-${this.props.type}-${new Date().getTime()}`}>
                    <td key={`name-${idx}-${this.props.type}-${new Date().getTime()}`}>
                        {this.props.productList[this.props.type][p].name}
                    </td>
                    <td key={`ingr-${idx}-${this.props.type}-${new Date().getTime()}`}>
                        {this.hasIngredient(this.props.productList[this.props.type][p].ingredients, p, idx)}
                    </td>
                    <td className="text-center" key={`price-${idx}-${this.props.type}-${new Date().getTime()}`}>
                        {this.props.productList[this.props.type][p].price} €
                    </td>
                    <td className="text-center" key={`zoom-${idx}-${this.props.type}-${new Date().getTime()}`}>
                        <button type="button" data-toggle="modal" data-target="#imgZoom" className="btn btn-info btn-sm"
                            data-type={this.props.type}
                            data-img={this.props.productList[this.props.type][p].img}
                            data-name={this.props.productList[this.props.type][p].name}>
                            <i className="fa fa-search-plus"></i></button>
                    </td>
                </tr>)
        }
        return (
            <div className="col-lg-6">
                <div className="card" key={'card-' + this.props.type}>
                    <div className="card-header d-flex align-items-center">
                        <h3 className="h4">{this.props.type}</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        {this.props.type === 'Frutas' || !this.props.productList.Bebidas ? <th rowSpan="2">Nombre</th> : <th>Nombre</th>}
                                        {this.props.type === 'Frutas' || !this.props.productList.Bebidas ? <th></th> : <th>Ingredientes</th>}
                                        <th className="text-center">Precio</th>
                                        <th className="text-center">Imagen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productsKeys.map(MakeProduct)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class IngredientsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: JSON.parse(localStorage.getItem('productos')),
        };
    }
    render() {
        let MakeIngredient = (ing) => {
            let type = this.state.productList.ingredientes[ing].type,
                name = this.state.productList.ingredientes[ing].name;
            if (type === 'pan')
                return `${type} ${name} `;
            else
                return `${name} `;
        }
        return (
            <span>{this.props.ingredients.map(MakeIngredient)}</span>
        );
    }
}