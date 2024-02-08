import { StyleSheet, Pressable, Text } from 'react-native';


export default function IconButton({text, onPress, size}){
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={[styles.text, {fontSize: size}]}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: "#000",
    },
    text: {
        margin: 10,
        color: '#ccc'
    },
});