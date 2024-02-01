
import { StyleSheet, Text, View } from 'react-native';
import Hamburger from '../components/Hamburger';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>This is my header</Text>
            <Hamburger/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
    },
    headerText: {
        color: '#fff'
    },
});