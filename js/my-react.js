"use strict";

var TMSCard = React.createClass({
	displayName: "TMSCard",

	render: function render() {
		var colClass = "col-md-6 tms-card";
		if (this.props.index % 2 == 0) {
			colClass = "col-md-offset-6 col-md-6 tms-card";
		}

		return React.createElement(
			"div",
			{ className: colClass },
			React.createElement(
				"div",
				{ className: "card-container" },
				React.createElement(
					"div",
					{ className: "card-title" },
					"標題"
				),
				React.createElement(
					"div",
					null,
					this.props.content
				),
				React.createElement(
					"div",
					null,
					"5:17"
				),
				React.createElement(
					"div",
					{ className: "tms-bottom" },
					"主題"
				)
			)
		);
	}
});

var AllCardViewer = React.createClass({
	displayName: "AllCardViewer",

	getInitialState: function getInitialState() {
		return { contentList: ["內容內容內容內容內容內容內容內容", "內容內容內容", "內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容"] };
	},

	render: function render() {
		// var chunkList = _.chunk(this.state.contentList, 3);

		// var createCol = function(content){
		// 	return (
		// 		<TMSCard content={content} />
		// 	);
		// };

		// var createRow = function(subArry){
		// 	return(
		// 			<div className="row">{subArry.map(createCol)}</div>
		// 	);
		// }

		// return (<div>{chunkList.map(createRow)}</div>);
		var createRow = function createRow(content, index) {
			return React.createElement(
				"div",
				{ className: "row" },
				React.createElement(TMSCard, { content: content, index: index })
			);
		};

		return React.createElement(
			"div",
			null,
			this.state.contentList.map(createRow)
		);
	}
});

var CardFilterForm = React.createClass({
	displayName: "CardFilterForm",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "col-sm-4 col-sm-offset-4 filter-form" },
				React.createElement(
					"form",
					null,
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							null,
							"From Chapter"
						),
						React.createElement("input", { className: "form-control", type: "text", placeholder: "e.g. A1" })
					),
					React.createElement(
						"div",
						{ className: "form-group" },
						React.createElement(
							"label",
							null,
							"To Chapter"
						),
						React.createElement("input", { className: "form-control", type: "text", placeholder: "e.g. A2" })
					),
					React.createElement(
						"div",
						{ align: "right" },
						React.createElement(
							"div",
							{ className: "btn btn-primary", onClick: this.props.onClick },
							"Go"
						)
					)
				)
			)
		);
	}
});

var NavDropDownList = React.createClass({
	displayName: "NavDropDownList",

	render: function render() {
		var createItem = function createItem(section) {
			return React.createElement(
				"li",
				{ key: section },
				React.createElement(
					"a",
					{ href: "#", id: section },
					section
				)
			);
		};

		return React.createElement(
			"ul",
			{ className: "dropdown-menu", onClick: this.props.onClick },
			this.props.sectionList.map(createItem)
		);
	}
});

var NavBar = React.createClass({
	displayName: "NavBar",

	getInitialState: function getInitialState() {
		return { sectionList: ["Chapter A", "Chapter B"] };
	},
	//-------------------Nav Menu Section------------------------------------------
	//when Home Button is clicked
	returnHomePage: function returnHomePage() {
		ReactDOM.render(React.createElement(Jumbotron, null), document.getElementById("content"));
	},

	//when section dropdown menu is clicked
	handleSecSel: function handleSecSel(e) {
		ReactDOM.render(React.createElement(AllCardViewer, null), document.getElementById("content"));
	},

	randomTest: function randomTest(e) {
		ReactDOM.render(React.createElement(CardFilterForm, null), document.getElementById("content"));
	},
	//-----------------------------------------------------------------------------

	render: function render() {
		return React.createElement(
			"nav",
			{ className: "navbar navbar-default navbar-fixed-top" },
			React.createElement(
				"div",
				{ className: "navbar-header" },
				React.createElement(
					"button",
					{ type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navMenuList", "aria-expanded": "false" },
					React.createElement("span", { className: "icon-bar" }),
					React.createElement("span", { className: "icon-bar" }),
					React.createElement("span", { className: "icon-bar" })
				),
				React.createElement(
					"a",
					{ className: "navbar-brand", href: "#", onClick: this.returnHomePage },
					"TMS"
				)
			),
			React.createElement(
				"div",
				{ className: "collapse navbar-collapse", id: "navMenuList" },
				React.createElement(
					"ul",
					{ className: "nav navbar-nav navbar-right" },
					React.createElement(
						"li",
						{ className: "dropdown" },
						React.createElement(
							"a",
							{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
							"TMS Review",
							React.createElement("span", { className: "caret" })
						),
						React.createElement(NavDropDownList, { sectionList: this.state.sectionList, onClick: this.handleSecSel })
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#", onClick: this.randomTest },
							"Random Test"
						)
					)
				)
			)
		);
	}
});

var Jumbotron = React.createClass({
	displayName: "Jumbotron",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "jumbotron" },
			React.createElement(
				"div",
				{ className: "container jum-container" },
				React.createElement(
					"h1",
					null,
					"Welcome to TMS"
				),
				React.createElement(
					"p",
					null,
					"This website is Under Development......"
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(NavBar, null), document.getElementById("nav-bar-area"));
ReactDOM.render(React.createElement(Jumbotron, null), document.getElementById("content"));
/*Brand and toggle get grouped for better mobile display*/