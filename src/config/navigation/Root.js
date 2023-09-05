import React, {useEffect} from 'react';
import Auth from './Auth';
import Main from './Main';
import {Provider, useDispatch, useSelector} from 'react-redux';

const Root = () => {
  const {auth} = useSelector(state => state);
  const isSignedIn = auth?.user?.jwt;

  return isSignedIn ? <Main /> : <Auth />;
};

export default Root;
