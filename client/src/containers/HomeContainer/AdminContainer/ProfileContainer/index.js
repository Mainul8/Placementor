import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../../../components/Home/Admin/Profile';

class ProfileContainer extends Component {
  state = {
    name: this.props.user.name,
    website: this.props.user.website
  };

  render() {
    const { name, website } = this.state;

    return <Profile name={name} website={website} />;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ProfileContainer);
