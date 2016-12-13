var React = require('react');

var styles = {
  container: {
    height: '100%',
    width: '100%'
  },
  header: {
      marginBottom: "0px"
  }

}

var Main = React.createClass({
    render: function () {
        return (
            <div style={styles.container}>
                <nav style={styles.header} className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Brand</a>
                        </div>

                        <div className="collapse navbar-collapse">
                            <form className="navbar-form navbar-right">
                                <div className="form-group">
                                    <input className="form-control" placeholder="Search"/>
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main