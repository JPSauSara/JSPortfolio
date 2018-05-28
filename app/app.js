// Include the Main React Dependencies
const React = require("react");
const ReactDOM = require("react-dom");

// Include the Header Component
const Header = require("./components/Header");

ReactDOM.render(

  // Here we deploy the header component as though it were any other HTML element
  <Header />,
  document.getElementById("app")

	);