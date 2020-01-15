import React, { useState, useEffect } from 'react';
import ListComponent from './components/list';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DetailsComponent from './components/detail';
import CameraComponent from './components/camera';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import allReducer from './store/index';

const store = createStore(allReducer, {});

export default function App() {
 return (
   <Provider store={store}>
     <AppContainer />
   </Provider>
  );
}

const AppStackNavigator = createStackNavigator({
  List: {screen: ListComponent},
  Detail: {screen: DetailsComponent},
  Camera: {screen: CameraComponent}
})
const AppContainer = createAppContainer(AppStackNavigator);
