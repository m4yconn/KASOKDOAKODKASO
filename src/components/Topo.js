import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Topo(props){
    return(
        <View style={styles.container}>

            <View style={styles.boxTopo}>

                <FontAwesome name="check" size={35} color="white" />
                <Text style={styles.boxText}>ToDo List</Text>
                <TouchableOpacity
                    onPress={props.onPress}
                >
                    <FontAwesome5 name="clipboard-list" size={35} color="white" />
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '10%',
        justifyContent: 'center',
        backgroundColor: '#8b008b'
    },

    boxTopo:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    boxText:{
        color: '#fff',
        fontSize: 25,
        fontFamily: 'courier',
        fontWeight: 'bold',
        marginTop: 5
    }
})