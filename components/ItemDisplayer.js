import { FlatList, StyleSheet, Text, View } from 'react-native';
import CheckBox from './CheckBox';

const checked = require('../assets/checkboxChecked.png');
const unChecked = require('../assets/checkboxUnchecked.png');

export default function ItemDisplayer({items}){
    return(
        <View style={styles.container}>
            <FlatList data={items} 
                renderItem={({item}) => 
                    <View style={styles.itemContainer}>
                        <CheckBox iconChecked={checked} iconUnchecked={unChecked} size={20} style={styles.checkboxContainer}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.descText}>{item.desc}</Text>
                            <Text>{item.id}</Text>
                        </View>
                    </View>
                }
                ItemSeparatorComponent={<View style={{padding: 10}}></View>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        alignSelf: 'center',
        width: '90%',
        height: '90%',
        backgroundColor: '#35393e',
        borderRadius: 10,
        padding: 10,
    },
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-begin',
        flexDirection: 'row',
        borderWidth: 1,
    },
    checkboxContainer: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
    }, 
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    descText: {

    },
});