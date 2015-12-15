var TMSCard = React.createClass({
	render: function(){
		return (
			<div className="tms-card col-md-4">
				<div className="card-title">Title</div>
				<div>5:17</div>
				<div>{this.props.content}</div>
				<div className="float-right">5:17</div>
				<br/>
				<div className="tms-bottom">Topic</div>
			</div>
		);
	}
});

var AllCardViewer = React.createClass({
	getInitialState: function(){
		return {contentList: ["Content A Content A Content A Content A", "Content B", "Content A Content A Content A Content AContent A Content A Content A Content AContent A Content A Content A Content AContent A Content A Content A Content AContent A Content A Content A Content AContent A Content A Content A Content A"]};
	},

	render: function(){
		var chunkList = _.chunk(this.state.contentList, 3);

		var createCol = function(content){
			return (
				<TMSCard content={content} />
			);
		};

		var createRow = function(subArry){
			return(
					<div className="row">{subArry.map(createCol)}</div>
			);
		}
		
		return (<div>{chunkList.map(createRow)}</div>);
	}
});

var CardFilterForm = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-sm-4 col-sm-offset-4 filter-form">
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
		ReactDOM.render(<AllCardViewer/>, document.getElementById("content"));
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
			    <p>Under Develop</p>
			  </div>
			</div>
		);
	}
});

ReactDOM.render(<NavBar/>, document.getElementById("nav-bar-area"));
ReactDOM.render(<Jumbotron/>, document.getElementById("content"));