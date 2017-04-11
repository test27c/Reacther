var React = require('react');
var {Link} = require('react-router');

var Example = (render) => {
    return (
      <div>        
        <h3 className="text-center">Example</h3>
        <p>Here are a few example location to try out:</p>
        <ol>
          <li>
            <Link to="/?location=Jakarta">Jakarta, Indonesia</Link>
          </li>
          <li>
            <Link to="/?location=Bandung">Tokyo, Japan</Link>
          </li>
        </ol>
      </div>
    );
  };

module.exports = Example;