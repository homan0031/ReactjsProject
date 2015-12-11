var NavDropDownList = React.createClass({
	render: function(){
		var createItem = function(items){
			return (
				<li key={items}>
					<a href="#">{items}</a>
				</li>
			);
		};

		return <ul className="dropdown-menu">{this.props.items.map(createItem)}</ul>
	}
});

var NavBar = React.createClass({
	getInitialState: function(){
		return {items: ["Chapter A", "Chapter B"]};
	},

	render: function(){
		return (
			<nav className="navbar navbar-default">
				{/*Brand and toggle get grouped for better mobile display*/}
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navMenuList" aria-expanded="false">
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<a className="navbar-brand" href="#">TMS</a>
				</div>

				<div className="collapse navbar-collapse" id="navMenuList">
		      <ul className="nav navbar-nav">
		      	<li className="dropdown">
  						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">TMS Review<span className="caret"></span></a>
  						<NavDropDownList items={this.state.items} />
						</li>
		        <li>
		        	<a href="#">Random Test</a>
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
			  <div className="container">
			    <h1>Hello, world!</h1>
			    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
			  </div>
			</div>
		);
	}
});

var FirstPage = React.createClass({
	render: function(){
		return(
			<div id="web-container">
				<NavBar/>
				<Jumbotron/>
			</div>
		);
	}
});

ReactDOM.render(<FirstPage/>, document.getElementById("content"));