class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: load('productos')
        }
    }
    render() {
        let type = Object.keys(this.state.productList.productos);
        let color = [' bg-green', ' bg-violet', 'bg-red', 'bg-orange', 'bg-yellow', 'bg-blue'];
        let MakeType = (type, idx) => {
            return <SummaryItem key={`sum-${idx}`} data={{ type: type, color: color[idx], products: this.state.productList.productos }} />
        }
        return (
            <div>
                <section className="dashboard-counts no-padding-bottom">
                    <div className="container-fluid">
                        <div className="row bg-white has-shadow">
                            {type.map(MakeType)}
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

class SummaryItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let count = 0;
        if (this.props.data.type !== 'Bebidas')
            count = Object.keys(this.props.data.products[this.props.data.type]).length;
        else {
            for (var e in this.props.data.products[this.props.data.type]) {
                count += Object.keys(this.props.data.products[this.props.data.type][e]).length;
            }
            console.log(count);
        }
        return (
            <div className="col-xl-3 col-sm-6">
                <div className="item d-flex align-items-center">
                    <div className={`icon ${this.props.data.color}`}>
                        <i className="fa fa-cutlery"></i>
                    </div>
                    <div className="title">
                        <span>Tipos de
                        <br />{this.props.data.type}</span>
                        <div className="progress">
                            <div
                                role="progressbar"
                                style={{ width: '50%', height: '4px' }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                className={`progress-bar ${this.props.data.color}`}></div>
                        </div>
                    </div>
                    <div className="number">
                        <strong>{count}</strong>
                    </div>
                </div>
            </div>
        );
    }
}