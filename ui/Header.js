
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>This is my header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        color: '#f00',
    },
    headerText: {
        color: '#fff'
    },
});