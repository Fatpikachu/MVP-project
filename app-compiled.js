'use strict';

var App = function App() {
  return React.createElement(
    'div',
    null,
    'My Fav Movies'
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('myApp'));
