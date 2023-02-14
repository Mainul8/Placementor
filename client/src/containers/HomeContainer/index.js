import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ROLES from '../../constants/roles';

import AdminContainer from './AdminContainer/Lazy';
import CompanyContainer from './CompanyContainer/Lazy';
import InstituteContainer from './InstituteContainer/Lazy';

class HomeContainer extends Component {
  render() {
    const { user } = this.props;

    return (
      <>
        {user.role === ROLES.ADMIN && <AdminContainer />}
        {user.role === ROLES.COMPANY && <CompanyContainer />}
        {user.role === ROLES.INSTITUTES && <InstituteContainer />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(HomeContainer);
