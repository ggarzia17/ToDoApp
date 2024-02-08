import { useState } from 'react';
import { StyleSheet, Pressable, Image } from 'react-native';


export default function IconButton({iconChecked, iconUnchecked, size}){
    const [checked, setChecked] = useState(false);

    const press = () => {
        setChecked(!checked);
    }

    return(
        <Pressable style={styles.container} onPress={press}>
            {checked ? (
                <Image source={iconChecked} style={[styles.icon, {width: size, height: size}]}/>
            ) : (
                <Image source={iconUnchecked} style={[styles.icon, {width: size, height: size}]}/>
            )}
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