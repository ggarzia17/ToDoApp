import { StyleSheet, Pressable, Image } from 'react-native';

const hamburger = require('../assets/hamburgerIcon.png');

export default function Hamburger(onPress){
    return(
        <Pressable style={styles.container}>
            <Image style={styles.icon} source={hamburger}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    icon: {
        width: 20,
        height: 20,
    },
});