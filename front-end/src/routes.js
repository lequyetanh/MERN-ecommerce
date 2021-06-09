import React from 'react';

import IndexPage from './pages/Index';
import TypePackagePage from './pages/TypePackage'
import NotFoundPage from './pages/NotFound'
import DetailPackage from './pages/DetailPackage'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import SigninPage from './pages/Signin'
import CartPage from './pages/UserCart'
import CheckoutPage from './pages/UserCheckout'
import LoginPage from './pages/Login'
import SearchPage from './pages/Search'

import FaqsPage from './pages/Faqs'
import HelpPage from './pages/Help'
import RulePage from './pages/Rule'
import PrivacyPage from './pages/Privacy'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <IndexPage/>
  }, 
  {
    path: '/typeProduct/:typeProduct/:page/:direction/:id',
    main: () => <TypePackagePage/>
  }, 
  {
    path: '/productItem/:id',
    main: () => <DetailPackage/>
  }, 
  {
    path: '/faqs',
    main: () => <FaqsPage />
  }, 
  {
    path: '/search/:search',
    main: () => <SearchPage />
  }, 
  {
    path: '/rule',
    main: () => <RulePage />
  }, 
  {
    path: '/privacy',
    main: () => <PrivacyPage />
  }, 
  {
    path: '/help',
    main: () => <HelpPage />
  }, 
  {
    path: '/about',
    main: () => <AboutPage/>
  }, 
  {
    path: '/contact',
    main: () => <ContactPage/>
  }, 
  {
    path: '/signin',
    main: () => <SigninPage/>
  }, 
  {
    path: '/user/cart',
    main: () => <CartPage/>
  }, 
  {
    path: '/user/checkout',
    main: () => <CheckoutPage/>
  },
  {
    path: '/login',
    main: () => <LoginPage/>
  }, 
  {
    path: '**',
    main: () => <NotFoundPage/>
  }
];

export default routes;