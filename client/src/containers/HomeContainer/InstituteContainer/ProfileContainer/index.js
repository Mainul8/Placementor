import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../../../components/Home/Institute/Profile';

class ProfileContainer extends Component {
  state = {
    name: this.props.user.name,
    website: this.props.user.website,
    phone: this.props.user.phone
  };

  render() {
    const { name, website, phone } = this.state;

    return <Profile name={name} website={website} phone={phone} />;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ProfileContainer);
