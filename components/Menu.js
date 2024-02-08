import { FlatList, StyleSheet, View } from 'react-native';

import MenuListItem from './MenuListItem';
import MenuHeader from './MenuHeader';

export default function ItemDisplayer({items, xIcon, close, text}){
    return(
        <View>
            <MenuHeader xIcon={xIcon} close={close} text={text}/>
            <FlatList data={items} 
                renderItem={({item}) => 
                    <View style={styles.container}>
                        <MenuListItem icon={item.icon} onPress={item.onPress} text={item.text}/>
                    </View>
                }
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
});