import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from './components/IconButton';
import MenuListItem from './components/MenuListItem';
import { Overlay } from '@rneui/themed';
import MenuHeader from './components/MenuHeader';
import ItemDisplayer from './components/ItemDisplayer';

const hamburger = require('./assets/hamburgerIcon.png');
const settingIcon = require('./assets/settingsIcon.png');
const accountIcon = require('./assets/accountIcon.png');
const xIcon = require('./assets/xIcon.png');


export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNewItem, setShowNewItem] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleNewItem = () => {
    setShowNewItem(!showNewItem);
  }

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <IconButton icon={hamburger} onPress={toggleMenu} size={20}/>
        <Text style={styles.headerText}>This is my header</Text>
      </View>
      <View style={styles.bodyContainer}>
        <ItemDisplayer/>
        <StatusBar style="auto" />
        
      </View>

      <Overlay isVisible={showNewItem} onBackdropPress={toggleNewItem} overlayStyle={styles.newItemContainer}>
        <Text>tester</Text>
      </Overlay>

      <Overlay isVisible={showMenu} onBackdropPress={toggleMenu} overlayStyle={styles.menuContainer}>
        <MenuHeader xIcon={xIcon} close={toggleMenu} text={'menu'}/>
        <MenuListItem onPress={()=>alert('account')} icon={accountIcon} text={'Account'}/>
        <MenuListItem onPress={()=>alert('settings')} icon={settingIcon} text={'Settings'}/>
        <MenuListItem onPress={()=>alert('settings')} icon={settingIcon} text={'Settings'}/>
        <MenuListItem onPress={()=>alert('settings')} icon={settingIcon} text={'Settings'}/>
      </Overlay>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 5,
    backgroundColor: '#25292e',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: '#000',
  },
  menuContainer: {
    backgroundColor: '#25292e',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    width: '66.7%',
    position: 'absolute',
    height: '100%',
    left: 0,
  },
  headerContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  headerText: {
    flex: 1,
    color: '#fff'
  },
  menuListContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  menuListIcon: {

  },
});
