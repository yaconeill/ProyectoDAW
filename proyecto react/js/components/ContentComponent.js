class ContentComponent extends React.Component {
    render() {
        return (
            <div>
                <section className="dashboard-counts no-padding-bottom">
                    <div className="container-fluid">
                        <div className="row bg-white has-shadow">
                            {/* <!-- Item --> */}
                            <div className="col-xl-3 col-sm-6">
                                <div className="item d-flex align-items-center">
                                    <div className="icon bg-violet">
                                        <i className="fa fa-cutlery"></i>
                                    </div>
                                    <div className="title">
                                        <span>Tipos de
                                            <br/>bocadillos</span>
                                        <div className="progress">
                                            <div
                                                role="progressbar"
                                                style={{width: '25%', height: '4px'}}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                className="progress-bar bg-violet"></div>
                                        </div>
                                    </div>
                                    <div className="number">
                                        <strong>25</strong>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item --> */}
                            <div className="col-xl-3 col-sm-6">
                                <div className="item d-flex align-items-center">
                                    <div className="icon bg-red">
                                        <i className="fa fa-cutlery"></i>
                                    </div>
                                    <div className="title">
                                        <span>Tipos de
                                            <br/>sandwiches</span>
                                        <div className="progress">
                                            <div
                                                role="progressbar"
                                                style={{width: '70%', height: '4px'}}                                                
                                                aria-valuenow="70"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                className="progress-bar bg-red"></div>
                                        </div>
                                    </div>
                                    <div className="number">
                                        <strong>70</strong>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item --> */}
                            <div className="col-xl-3 col-sm-6">
                                <div className="item d-flex align-items-center">
                                    <div className="icon bg-green">
                                        <i className="fa fa-coffee"></i>
                                    </div>
                                    <div className="title">
                                        <span>Tipos de
                                            <br/>bebidas</span>
                                        <div className="progress">
                                            <div
                                                role="progressbar"
                                                style={{width: '40%', height: '4px'}}                                                
                                                aria-valuenow="40"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                className="progress-bar bg-green"></div>
                                        </div>
                                    </div>
                                    <div className="number">
                                        <strong>40</strong>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Item --> */}
                            <div className="col-xl-3 col-sm-6">
                                <div className="item d-flex align-items-center">
                                    <div className="icon bg-orange">
                                        <i className="fa fa-cutlery"></i>
                                    </div>
                                    <div className="title">
                                        <span>Tipos de
                                            <br/>snakcs</span>
                                        <div className="progress">
                                            <div
                                                role="progressbar"
                                                style={{width: '50%', height: '4px'}}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                className="progress-bar bg-orange"></div>
                                        </div>
                                    </div>
                                    <div className="number">
                                        <strong>50</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    
    }
}