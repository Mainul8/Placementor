import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from '../../../../components/Home/Company/Profile';

class ProfileContainer extends Component {
  state = {
    name: this.props.user.name,
    website: this.props.user.website,
    companyName: this.props.user.companyName,
    companyEmail: this.props.user.companyEmail,
    companyPhone: this.props.user.companyPhone
  };

  render() {
    const {
      name,
      website,
      companyName,
      companyEmail,
      companyPhone
    } = this.state;

    return (
      <Profile
        name={name}
        website={website}
        companyName={companyName}
        companyEmail={companyEmail}
        companyPhone={companyPhone}
      />
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(ProfileContainer);
