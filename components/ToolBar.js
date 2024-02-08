import { FlatList, StyleSheet, Text, View } from 'react-native';
import IconButton from './IconButton';


export default function ToolBar({items}){

    return(
        <View style={styles.container}>
            <FlatList data={items} 
                horizontal={true}
                renderItem={({item}) => <View style={styles.itemContainer}>
                <IconButton icon={item.icon} onPress={item.press} size={50}/>
                </View>
            }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#35393e',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flex: 1,
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-start',
    },
    text: {
        padding: 10,
    }
});