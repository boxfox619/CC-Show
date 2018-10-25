import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class TabHeader extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        tabs: PropTypes.array,
        onTabSelected: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        };
    }

    render() {
        let renderTabs = () => {
            return this.props.tabs.map((tab, idx) => {
                if (idx === this.state.activeTab) {
                    return (<activetab key={'tab' + idx}>{tab}</activetab>);
                } else {
                    return (<tab key={'tab' + idx} onClick={() => this.selectTab(tab, idx)}>{tab}</tab>);
                }
            });
        };
        return (
            <header>
                <h1>{this.props.title}</h1>
                <tabholder>
                    {!_.isEmpty(this.props.tabs) && renderTabs()}
                </tabholder>
            </header>
        );
    }

    selectTab = (tab, idx) => {
        this.setState({activeTab: idx});
        this.props.onTabSelected(tab, idx);
    }
}