import React, {Component} from 'react';
import { browserHistory, Router } from 'react-router'

class App extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        routes: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <div style={{height: '100%'}}>
                    <Router history={browserHistory} children={this.props.routes}/>
                </div>
            </Provider>
        );
    }
}

export default App;
