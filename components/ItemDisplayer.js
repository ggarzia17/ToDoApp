import { FlatList, StyleSheet, Text, View } from 'react-native';


export default function ItemDisplayer({items}){
    return(
        <View style={styles.container}>
            <FlatList data={[1,2,3]} 
            renderItem={({item}) => <View style={styles.itemContainer}>
                <Text style={styles.text}>{item}</Text>
            </View>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '90%',
        height: '90%',
        backgroundColor: '#35393e',
        borderRadius: 10,
    },
    itemContainer: {
        
    },
    text: {
        padding: 10,
    }
});