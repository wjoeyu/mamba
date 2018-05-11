import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import Modal from './modal/modal';
import Splash from './splash/splash_container';

const Frontpage = () => (
  <div>
    <Modal />
    <Splash />
  </div>
);

export default Frontpage;
