import React from 'react';

const propTypes = {
  title: React.PropTypes.string.isRequired,
  tabs: React.PropTypes.array,
  onTabSelected: React.PropTypes.func
};


class DialogHeader extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  render() {
    let renderTabs = () => {
      return this.props.tabs.map((tab, idx) => {
        if (idx == this.state.activeTab) {
          return (<activetab key={'tab' + idx}>{tab}</activetab>);
        } else {
          return (<tab key={'tab' + idx}
            onClick={() => this.selectTab(tab, idx)}
          >{tab}</tab>);
        }
      });
    };
    return (
      <header>
        <h1>{this.props.title}</h1>
        {!!this.props.tabs &&
            <tabholder>
              {renderTabs()}
            </tabholder>
        }
      </header>
    );
  }

  selectTab(tab, idx){
    this.setState({activeTab: idx});
    this.props.onTabSelected(tab, idx);
  }
}

DialogHeader.propTypes = propTypes;

export default DialogHeader;