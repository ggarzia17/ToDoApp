import { StyleSheet, Pressable, Image } from 'react-native';

const hamburger = require('../assets/hamburgerIcon.png');

export default function Hamburger({ onPress }){
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.icon} source={hamburger}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
    icon: {
        width: 20,
        height: 20,
        margin: 10,
    },
});