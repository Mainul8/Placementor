import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

import Company from '../../../components/Home/Company/Lazy';
import InstitutesContainer from './InstitutesContainer/Lazy';
import JobsContainer from './JobsContainer/Lazy';
import NewContainer from './JobsContainer/NewContainer/Lazy';
import ProfileContainer from './ProfileContainer/Lazy';
import EditContainer from './ProfileContainer/EditContainer/Lazy';
import NotFound from '../../../components/NotFound/Lazy';

class CompanyContainer extends Component {
  render() {
    return (
      <Switch>
        <Route path={ROUTES.HOME} component={Company} exact />
        <Route path={ROUTES.INSTITUTES} component={InstitutesContainer} />
        <Route path={ROUTES.JOBS} component={JobsContainer} exact />
        <Route path={ROUTES.JOBS_NEW} component={NewContainer} />
        <Route path={ROUTES.PROFILE} component={ProfileContainer} exact />
        <Route path={ROUTES.PROFILE_EDIT} component={EditContainer} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default CompanyContainer;
