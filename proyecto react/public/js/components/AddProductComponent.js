class AddProductComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: JSON.parse(localStorage.getItem('productos')),
			value: '?',
			show: false,
		};
	}
	componentDidMount() {
		// ------------------------------------------------------- //
		// Adding fade effect to dropdowns
		// ------------------------------------------------------ //
		$('.dropdown').on('show.bs.dropdown', function () {
			$(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
		});
		$('.dropdown').on('hide.bs.dropdown', function () {
			$(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
		});

		// ------------------------------------------------------- //
		// Login  form validation
		// ------------------------------------------------------ //
		$('#login-form').validate({
			messages: {
				loginUsername: 'please enter your username',
				loginPassword: 'please enter your password'
			}
		});

		// ------------------------------------------------------- //
		// Register form validation
		// ------------------------------------------------------ //
		$('#register-form').validate({
			messages: {
				registerUsername: 'please enter your first name',
				registerEmail: 'please enter a valid Email Address',
				registerPassword: 'please enter your password'
			}
		});
		// ------------------------------------------------------- //
		// Material Inputs
		// ------------------------------------------------------ //

		var materialInputs = $('input.input-material');

		// activate labels for prefilled values
		materialInputs.filter(function () { return $(this).val() !== ""; }).siblings('.label-material').addClass('active');

		// move label on focus
		materialInputs.on('focus', function () {
			$(this).siblings('.label-material').addClass('active');
		});

		// remove/keep label on blur
		materialInputs.on('blur', function () {
			$(this).siblings('.label-material').removeClass('active');

			if ($(this).val() !== '') {
				$(this).siblings('.label-material').addClass('active');
			} else {
				$(this).siblings('.label-material').removeClass('active');
			}
		});
	}
	render() {
		var types = Object.keys(this.state.productList.productos),
			MakeType = (type) => { return <option key={type} value={type}>{type}</option>; },
			showIngredientes = '', ingredientsKey = Object.keys(this.state.productList.ingredientes);
		if (this.state.value != '?' && this.state.value !== 'Bebidas') {
			showIngredientes = (i) => {
				if (this.state.productList.ingredientes[i].type == 'pan') {
					return (
						<div class="i-checks">
							<input id={'radio-' + i} type="radio" key={'ing-' + i} value={'ing-' + i} name="a" class="radio-template" />
							<label htmlFor={'radio-' + i}>{this.state.productList.ingredientes[i].type} - {this.state.productList.ingredientes[i].name}</label>
						</div>
					);
				}
				else
					return (
						<div class="i-checks">
							<input id={'check-' + i} type="checkbox" key={'ing-' + i} value={'ing-' + i} class="checkbox-template" />
							<label htmlFor={'check-' + i}>{this.state.productList.ingredientes[i].type} - {this.state.productList.ingredientes[i].name}</label>
						</div>
					);
			}
		} else
			this.state.show = false;
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
