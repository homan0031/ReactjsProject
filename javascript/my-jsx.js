var CardFilterForm = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-md-4 col-md-offset-4 filter-form">
					<form>
						<div className="form-group">
							<label>From Chapter</label>
							<input className="form-control" type="text" placeholder='e.g. A1' />
						</div>
						<div className="form-group">
							<label>To Chapter</label>
							<input className="form-control" type="text" placeholder='e.g. A2' />
						</div>
						<div align='right'>
	          	<div className="btn btn-primary">Go</div>
	        	</div>
					</form>
				</div>
			</div>
		);
	}
});

var NavDropDownList = React.createClass({
	render: function(){
		var createItem = function(section){
			return (
				<li key={section}>
					<a href="#" id={section}>{section}</a>
				</li>
			);
		};

		return <ul className="dropdown-menu" onClick={this.props.onClick}>{this.props.sectionList.map(createItem)}</ul>
	}
});

var NavBar = React.createClass({
	getInitialState: function(){
		return {sectionList: ["Chapter A", "Chapter B"]};
	},
	//-------------------Nav Menu Section------------------------------------------
	//when Home Button is clicked
	returnHomePage: function(){
		ReactDOM.render(<Jumbotron/>, document.getElementById("content"));
	},

	//when section dropdown menu is clicked
	handleSecSel: function(e){
		ReactDOM.render(<div> {e.target.id} </div>, document.getElementById("content"));
	},

	randomTest: function(e){
		ReactDOM.render(<CardFilterForm/>, document.getElementById("content"));
	},
	//-----------------------------------------------------------------------------

	render: function(){
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				{/*Brand and toggle get grouped for better mobile display*/}
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navMenuList" aria-expanded="false">
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<a className="navbar-brand" href="#" onClick={this.returnHomePage}>TMS</a>
				</div>

				<div className="collapse navbar-collapse" id="navMenuList">
		      <ul className="nav navbar-nav">
		      	<li className="dropdown">
  						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
  							TMS Review<span className="caret"></span>
  						</a>
  						<NavDropDownList sectionList={this.state.sectionList} onClick={this.handleSecSel} />
						</li>
		        <li>
		        	<a href="#" onClick={this.randomTest}>Random Test</a>
		        </li>
		      </ul>
		    </div>
			</nav>
		);
	}
});

var Jumbotron = React.createClass({
	render: function(){
		return(
			<div className="jumbotron">
			  <div className="container jum-container">
			    <h1>Hello, world!</h1>
			    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
			  </div>
			</div>
		);
	}
});

ReactDOM.render(<NavBar/>, document.getElementById("nav-bar-area"));
ReactDOM.render(<Jumbotron/>, document.getElementById("content"));