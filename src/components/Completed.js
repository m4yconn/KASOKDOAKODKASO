import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

export default function Completed(props){

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={props.onPress}
            >
                <FontAwesome name="check" size={28} color="white" />
            </TouchableOpacity>
            <Text style={styles.text}>
                {props.msg}
            </Text>
            <TouchableOpacity
                onPress = {props.onPressEdit}
            >
                <Feather name="edit" size={28} color="white" />
            </TouchableOpacity>
    
            
        </View>
    );
}

// 

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#8b008b',
        padding: 5,
        marginBottom: 10,
        justifyContent: 'space-between'
    },

    text:{
        color: 'white',
        fontFamily: 'courier',
        fontSize: 18,
        fontWeight: 'bold',
    }
})