import {View, StyleSheet, Text} from 'react-native'

export default function Pending(props){
    return(
        <View style={styles.container}>

            <Text style={styles.text}>{props.msg}</Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        alignItems: 'center',
        flexDirection: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#8b008b',
        backgroundColor: '#dcdcdc',
        padding: 5,
        marginBottom: 10
    },

    text:{
        fontFamily: 'courier',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        textDecorationLine: 'line-through'
    }
})