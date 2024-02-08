import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import IconButton from './components/IconButton';
import TextButton from './components/TextButton';
import { Overlay } from '@rneui/themed';
import Menu from './components/Menu';
import ItemDisplayer from './components/ItemDisplayer';
import ToolBar from './components/ToolBar';

const hamburger = require('./assets/hamburgerIcon.png');
const settingIcon = require('./assets/settingsIcon.png');
const accountIcon = require('./assets/accountIcon.png');
const xIcon = require('./assets/xIcon.png');
const plusIcon = require('./assets/plusIcon.png');
const clearIcon = require('./assets/clearIcon.png');
const questionIcon = require('./assets/questionIcon.png');
const historyIcon = require('./assets/historyIcon.png');

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);
  const [descText, onChangeDescText] = useState('');
  const [nameText, onChangeNameText] = useState('');
  const [listItems, setListItems] = useState([]);
  
  const toggleAddItem = () => {
    setShowAddItem(!showAddItem);
  };
  const clearListItems = () => {
    setListItems([]);
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const submit = () => {
    if(listItems.length===0){
      id = 0;
    }else{
      id = listItems.at(-1).id+1;
    }

    if(nameText!=''){
      listItems.push({
        id:id,
        name: nameText,
        desc: descText,
      });
    }
    
      onChangeNameText('');
      onChangeDescText('');
      toggleAddItem();
  };

  const toolBarItems=[
      {
        icon: plusIcon,
        press: toggleAddItem,
      },
      {
        icon: clearIcon,
        press: clearListItems,
      }
  ];

  const MenuListItems=[
    {
      onPress:()=>alert('account'), 
      icon:accountIcon,
      text:'Account',
    },
    {
      onPress: ()=>alert('settings'), 
      icon: settingIcon,
      text: 'Settings',
    },
    { 
      onPress: ()=>alert('history'),
      icon: historyIcon, 
      text: 'History',
    }, 
    { 
      onPress: ()=>alert('help'),
      icon: questionIcon, 
      text: 'Help',
    },
];

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <IconButton icon={hamburger} onPress={toggleMenu} size={20}/>
        <Text style={styles.headerText}>This is my header</Text>
      </View>
      <View style={styles.bodyContainer}>
        <ItemDisplayer items={listItems}/>
        <ToolBar items={toolBarItems}/>
      </View>

      <Overlay isVisible={showAddItem} onBackdropPress={toggleAddItem} overlayStyle={styles.addItemContainer}>
        <KeyboardAvoidingView behavior='padding' enabled={true} style={{flex: 1}}>
          <Text>Add new ToDo</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={onChangeNameText}
            value={nameText}
            placeholder={'enter name'}
            placeholderTextColor={'#000'}
          />
          <TextInput
            multiline
            style={styles.input}
            onChangeText={onChangeDescText}
            value={descText}
            placeholder={'enter description'}
            placeholderTextColor={'#000'}
          />
          <TextButton text={'submit'} size={20} onPress={submit}/>
        </KeyboardAvoidingView>
      </Overlay>

      <Overlay isVisible={showMenu} onBackdropPress={toggleMenu} overlayStyle={styles.menuContainer}>
        <Menu items={MenuListItems} xIcon={xIcon} close={toggleMenu} text={'Menu'}/>
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
    gap: 10,
    paddingTop: 10,
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
  addItemContainer: {
    backgroundColor: "#444",
    gap: 10,
    height: '30%',
    width: '50%',
    bottom: '25%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
