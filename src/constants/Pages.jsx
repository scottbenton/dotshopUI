import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from 'constants/routes';

import { AccountPage } from 'pages/AccountPage';
import { AdminPage } from 'pages/AdminPage';
import { ForgotPasswordPage } from 'pages/ForgotPasswordPage';
import { DashboardPage } from 'pages/Dashboard';
import { LandingPage } from 'pages/LandingPage';
import { LoginPage } from 'pages/LoginPage';
import { SignUpPage } from 'pages/SignUpPage';

export const PAGES = {
  LOGIN: {
    title: "Login",
    link: React.forwardRef((props, ref) => <Link to={ROUTES.LOGIN} innerRef={ref} {...props} />),
    component: (props) => <LoginPage {...props} />,
  },
  LANDING: {
    title: "Landing",
    link: React.forwardRef((props, ref) => <Link to={ROUTES.LANDING} innerRef={ref} {...props} />),
    component: (props) => <LandingPage {...props} />,
  },
  DASHBOARD: {
    title: "Dashboard",
    link: React.forwardRef((props, ref) => <Link to={ROUTES.DASHBOARD} innerRef={ref} {...props} />),
    component: (props) => <DashboardPage {...props} />,
  },
  ACCOUNT: {
    title: "Account",
    link: React.forwardRef((props, ref) => <Link to={ROUTES.ACCOUNT} innerRef={ref} {...props} />),
    component: (props) => <AccountPage {...props} />,
  },
  ADMIN: {
    title: "Admin",
    link: React.forwardRef((props, ref) => <Link to={ROUTES.ADMIN} innerRef={ref} {...props} />),
    component: (props) => <AdminPage {...props} />,
  },
  PASSWORD_FORGET: {
    title: "Forgot Password",
    link: React.forwardRef((props, ref) => <Link to={ROUTES.PASSWORD_FORGET} innerRef={ref} {...props} />),
    component: (props) => <ForgotPasswordPage {...props} />,
  },
  SIGN_UP: {
    title: "Sign Up",
    link: React.forwardRef((props, ref) => <Link to={ROUTES.SIGN_UP} innerRef={ref} {...props} />),
    component: (props) => <SignUpPage {...props} />,
  }
}