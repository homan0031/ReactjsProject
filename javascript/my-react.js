"use strict";

var NavDropDownList = React.createClass({
	displayName: "NavDropDownList",

	render: function render() {
		var createItem = function createItem(items) {
			return React.createElement(
				"li",
				{ key: items },
				React.createElement(
					"a",
					{ href: "#", id: items },
					items
				)
			);
		};

		return React.createElement(
			"ul",
			{ className: "dropdown-menu", onClick: this.props.onClick },
			this.props.items.map(createItem)
		);
	}
});

var NavBar = React.createClass({
	displayName: "NavBar",

	getInitialState: function getInitialState() {
		return { items: ["Chapter A", "Chapter B"] };
	},

	handleSecSel: function handleSecSel(e) {
		ReactDOM.render(React.createElement(
			"div",
			null,
			"HI"
		), document.getElementById("jum-area"));
	},

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
					{ className: "navbar-brand", href: "#" },
					"TMS"
				)
			),
			React.createElement(
				"div",
				{ className: "collapse navbar-collapse", id: "navMenuList" },
				React.createElement(
					"ul",
					{ className: "nav navbar-nav" },
					React.createElement(
						"li",
						{ className: "dropdown" },
						React.createElement(
							"a",
							{ href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
							"TMS Review",
							React.createElement("span", { className: "caret" })
						),
						React.createElement(NavDropDownList, { items: this.state.items, onClick: this.handleSecSel })
					),
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ href: "#" },
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
					"Hello, world!"
				),
				React.createElement(
					"p",
					null,
					"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
				),
				React.createElement(
					"p",
					null,
					React.createElement(
						"a",
						{ className: "btn btn-primary btn-lg", href: "#", role: "button" },
						"Learn more"
					)
				)
			)
		);
	}
});

var FirstPage = React.createClass({
	displayName: "FirstPage",

	render: function render() {
		return React.createElement(
			"div",
			{ id: "web-container" },
			React.createElement(NavBar, null),
			React.createElement(Jumbotron, null)
		);
	}
});

ReactDOM.render(React.createElement(FirstPage, null), document.getElementById("content"));
/*Brand and toggle get grouped for better mobile display*/