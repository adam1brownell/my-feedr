import React from 'react';
import { StackNavigator, initialRouteName, headerMode, TabNavigator } from 'react-navigation';
import MainPage from './assets/components/pages/mainPage';
import DietPage from './assets/components/pages/dietPage';
import AccountsPage from './assets/components/pages/accountsPage';
import SettingsPage from './assets/components/pages/settingsPage';
import MediaPage from './assets/components/pages/mediaPage';

export const RootStack = StackNavigator(
  {
    Home: {screen: MainPage},
    Settings: {screen: SettingsPage},
    Diet: {screen: DietPage},
    Accounts: {screen: AccountsPage},
    Media: {screen: MediaPage}
  },
  {headerMode: 'none'}
);

export const SettingsStack = TabNavigator(
  {
    DietInfo: {screen: DietPage,
    navigationOptions: {tabBarLabel: 'Low Information Diet'}},
    AccountsPage: {screen: AccountsPage,
    navigationOptions: {tabBarLabel: 'Linked Accounts'}}

  },
    //{navigationOptions: tabBarPosition: 'top'}
);
