class ChartComponent extends React.Component {
  componentDidMount() {
    createCharts();
  }
  render() {
    return (
      <section className="charts" id="hola">
        <div className="container-fluid">
          <div className="row">
            {/* Line Charts */}
            <div className="col-lg-8">
              <div className="line-chart-example card">
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
                        <i className="fa fa-times"></i>Close</a>
                      <a href="#" className="dropdown-item edit">
                        <i className="fa fa-gear"></i>Edit</a>
                    </div>
                  </div>
                </div>
                <div className="card-header d-flex align-items-center">
                  <h3 className="h4">Comparación de ventas por año</h3>
                </div>
                <div className="card-body">
                  <canvas id="lineChartExample"></canvas>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="line-chart-example card no-margin-bottom">
                <div className="card-close">
                  <div className="dropdown">
                    <button
                      type="button"
                      id="closeCard2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-toggle">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div
                      aria-labelledby="closeCard2"
                      className="dropdown-menu dropdown-menu-right has-shadow">
                      <a href="#" className="dropdown-item remove">
                        <i className="fa fa-times"></i>Close</a>
                      <a href="#" className="dropdown-item edit">
                        <i className="fa fa-gear"></i>Edit</a>
                    </div>
                  </div>
                </div>
                <div className="card-header d-flex align-items-center">
                  <h3 className="h4">Venta del producto más vendido por año</h3>
                </div>
                <div className="card-body">
                  <canvas id="lineChartExample1"></canvas>
                </div>
              </div>
              <div className="line-chart-example card">
                <div className="card-close">
                  <div className="dropdown">
                    <button
                      type="button"
                      id="closeCard3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-toggle">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div
                      aria-labelledby="closeCard3"
                      className="dropdown-menu dropdown-menu-right has-shadow">
                      <a href="#" className="dropdown-item remove">
                        <i className="fa fa-times"></i>Close</a>
                      <a href="#" className="dropdown-item edit">
                        <i className="fa fa-gear"></i>Edit</a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <canvas id="lineChartExample2"></canvas>
                </div>
              </div>
            </div>
            {/* Bar Charts */}
            <div className="col-lg-4">
              <div className="bar-chart-example card no-margin-bottom">
                <div className="card-close">
                  <div className="dropdown">
                    <button
                      type="button"
                      id="closeCard4"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-toggle">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div
                      aria-labelledby="closeCard4"
                      className="dropdown-menu dropdown-menu-right has-shadow">
                      <a href="#" className="dropdown-item remove">
                        <i className="fa fa-times"></i>Close</a>
                      <a href="#" className="dropdown-item edit">
                        <i className="fa fa-gear"></i>Edit</a>
                    </div>
                  </div>
                </div>
                <div className="card-header d-flex align-items-center">
                  <h3 className="h4">Venta de cafés por año</h3>
                </div>
                <div className="card-body">
                  <canvas id="barChart1"></canvas>
                </div>
              </div>
              <div className="line-chart-example card">
                <div className="card-close">
                  <div className="dropdown">
                    <button
                      type="button"
                      id="closeCard5"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-toggle">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div
                      aria-labelledby="closeCard5"
                      className="dropdown-menu dropdown-menu-right has-shadow">
                      <a href="#" className="dropdown-item remove">
                        <i className="fa fa-times"></i>Close</a>
                      <a href="#" className="dropdown-item edit">
                        <i className="fa fa-gear"></i>Edit</a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <canvas id="barChart2"></canvas>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="bar-chart-example card">
                <div className="card-close">
                  <div className="dropdown">
                    <button
                      type="button"
                      id="closeCard6"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-toggle">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div
                      aria-labelledby="closeCard6"
                      className="dropdown-menu dropdown-menu-right has-shadow">
                      <a href="#" className="dropdown-item remove">
                        <i className="fa fa-times"></i>Close</a>
                      <a href="#" className="dropdown-item edit">
                        <i className="fa fa-gear"></i>Edit</a>
                    </div>
                  </div>
                </div>
                <div className="card-header d-flex align-items-center">
                  <h3 className="h4">Venta de pulguitas y bocadillos por mes</h3>
                </div>
                <div className="card-body">
                  <canvas id="barChartExample"></canvas>
                </div>
              </div>
            </div>
            {/* Doughnut Chart  */}
            <div className="col-lg-6">
              <div className="pie-chart-example card">
                <div className="card-close">
                  <div className="dropdown">
                    <button
                      type="button"
                      id="closeCard7"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-toggle">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div
                      aria-labelledby="closeCard7"
                      className="dropdown-menu dropdown-menu-right has-shadow">
                      <a href="#" className="dropdown-item remove">
                        <i className="fa fa-times"></i>Close</a>
                      <a href="#" className="dropdown-item edit">
                        <i className="fa fa-gear"></i>Edit</a>
                    </div>
                  </div>
                </div>
                <div className="card-header d-flex align-items-center">
                  <h3 className="h4">Ventas de tipos de panes</h3>
                </div>
                <div className="card-body">
                  <canvas id="doughnutChartExample"></canvas>
                </div>
              </div>
            </div>
            {/* Pie Chart  */}
            <div className="col-lg-6">
              <div className="pie-chart-example card">
                <div className="card-close">
                  <div className="dropdown">
                    <button
                      type="button"
                      id="closeCard8"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-toggle">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div
                      aria-labelledby="closeCard8"
                      className="dropdown-menu dropdown-menu-right has-shadow">
                      <a href="#" className="dropdown-item remove">
                        <i className="fa fa-times"></i>Close</a>
                      <a href="#" className="dropdown-item edit">
                        <i className="fa fa-gear"></i>Edit</a>
                    </div>
                  </div>
                </div>
                <div className="card-header d-flex align-items-center">
                  <h3 className="h4">Ventas de tipos de frutas</h3>
                </div>
                <div className="card-body">
                  <canvas id="pieChartExample"></canvas>
                </div>
              </div>
            </div>
            {/* Polar Chart */}
            <div className="col-lg-6">
              <div className="polar-chart-example card">
                <div className="card-close">
                  <div className="dropdown">
                    <button
                      type="button"
                      id="closeCard9"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-toggle">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div
                      aria-labelledby="closeCard9"
                      className="dropdown-menu dropdown-menu-right has-shadow">
                      <a href="#" className="dropdown-item remove">
                        <i className="fa fa-times"></i>Close</a>
                      <a href="#" className="dropdown-item edit">
                        <i className="fa fa-gear"></i>Edit</a>
                    </div>
                  </div>
                </div>
                <div className="card-header d-flex align-items-center">
                  <h3 className="h4">Polar Chart Example</h3>
                </div>
                <div className="card-body">
                  <canvas id="polarChartExample"></canvas>
                </div>
              </div>
            </div>
            {/* Radar Chart */}
            <div className="col-lg-6">
              <div className="radar-chart-example card">
                <div className="card-close">
                  <div className="dropdown">
                    <button
                      type="button"
                      id="closeCard10"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="dropdown-toggle">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div
                      aria-labelledby="closeCard10"
                      className="dropdown-menu dropdown-menu-right has-shadow">
                      <a href="#" className="dropdown-item remove">
                        <i className="fa fa-times"></i>Close</a>
                      <a href="#" className="dropdown-item edit">
                        <i className="fa fa-gear"></i>Edit</a>
                    </div>
                  </div>
                </div>
                <div className="card-header d-flex align-items-center">
                  <h3 className="h4">Radar Chart Example</h3>
                </div>
                <div className="card-body">
                  <canvas id="radarChartExample"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}