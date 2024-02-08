import { StyleSheet, Pressable, Image, Text} from 'react-native';


export default function menuListItem({icon, onPress, text}){
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.icon} source={icon}/>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        width: 35,
        height: 35,
        margin: 10,
    },
    text: {
        color: '#fff',
    },
});