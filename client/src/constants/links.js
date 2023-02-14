import * as ROUTES from './routes';

const PUBLIC_LINKS = [
  {
    path: ROUTES.LANDING,
    text: 'Home'
  },
  {
    path: ROUTES.SIGN_UP,
    text: 'Sign Up'
  },
  {
    path: ROUTES.LOG_IN,
    text: 'Log In'
  },
  {
    path: ROUTES.ABOUT,
    text :'About'
  },
  {
    path: ROUTES.CONTACT_US,
    text :'Contact Us'
  }
];

const ADMIN_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home'
  },
  {
    path: ROUTES.COMPANIES,
    text: 'Companies'
  },
  {
    path: ROUTES.INSTITUTES,
    text: 'Institutes'
  },
  {
    path: ROUTES.JOBS,
    text: 'Jobs'
  },
  {
    path: ROUTES.STUDENTS,
    text: 'Students'
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile'
  }
];

const COMPANY_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home'
  },
  {
    path: ROUTES.INSTITUTES,
    text: 'Institute'
  },
  {
    path: ROUTES.JOBS,
    text: 'Jobs'
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile'
  }
];

const INSTITUTES_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home'
  },
  {
    path: ROUTES.COMPANIES,
    text: 'Companies'
  },
  {
    path: ROUTES.JOBS,
    text: 'Jobs'
  },
  {
    path: ROUTES.STUDENTS,
    text: 'Students'
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile'
  }
];

export { PUBLIC_LINKS, ADMIN_LINKS, COMPANY_LINKS, INSTITUTES_LINKS };
