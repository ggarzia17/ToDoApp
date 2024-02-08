import { StyleSheet, Pressable, Image } from 'react-native';


export default function IconButton({icon, onPress, size}){
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={[styles.icon, {width: size, height: size}]} source={icon}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    icon: {
        margin: 10,
    },
});