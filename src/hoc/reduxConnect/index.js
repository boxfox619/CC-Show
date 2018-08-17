// Props Proxy HOC

import {connect} from "react-redux";

/**
 * hoc/reduxConnect : maps state to props function
 * @param {Object} state the state of the container
 * @returns {Object} state
 **/
function mapStateToProps(state) {
  return state;
}

export default function (WrappedComponent, actions, state = mapStateToProps) {
  return connect(state, actions)(WrappedComponent);
}