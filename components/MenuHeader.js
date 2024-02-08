import { StyleSheet, Text, View} from 'react-native';
import IconButton from './IconButton';


export default function MenuHeader({xIcon, close, text}){
    return(
        <View style={styles.container}>
            <IconButton onPress={close} icon={xIcon} size={25} style={styles.icon}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        width: 30,
        height: 30,
        margin: 10,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        alignSelf: 'center',
        flex: 1,
    },
});