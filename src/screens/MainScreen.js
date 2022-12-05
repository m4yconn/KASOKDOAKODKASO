import { View, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { useState, useEffect } from "react";
import Topo from "../components/Topo";
import Completed from "../components/Completed";
import Pending from "../components/Pending";
import TaskInput from "../components/TaskInput";


export default function MainScreen(){

    const [loading, setLoading] = useState(true)
    const [task, setTask] = useState('')
    const [input, setInput] = useState(false)
    const [pending, setPending] = useState([])
    const [completed, setCompleted] = useState([])

    let getTasks = () => {
        fetch("http://localhost:3000/tasks")
        .then(res => res.json())
        .then(json => {

            let tempP = []
            let tempC = []

            json.map(e => {

                if(e.completed){
                    tempC.push([e.msg, e.id])
                }else{
                    tempP.push([e.msg, e.id])
                }

            })

            setCompleted(tempC)
            setPending(tempP)
            setLoading(false)

        })
        .catch(error => console.log("Ocorreu um erro: ", error))
    }

    let uptadeTasks = (id, msg) => {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                msg: msg,
                completed: true
            })
        })
    }

    let addTasks = (msg) => {
        fetch(`http://localhost:3000/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                msg: msg,
                completed: false
            })
        })
    }

    let delTasks = (id) => {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE'
    })  
    }

    if(loading){
        getTasks();
    }

    return(
        <View style={styles.container}>
            <Topo
                onPress = {() => setInput(!input)}
            />
            {input ? <TaskInput
                        onChangeText = {(text) => setTask(text)}
                        onPress = {() => {
                            let listTemp = [...pending]
                            addTasks(task)
                            listTemp.push([task, 0])
                            setPending(listTemp)
                            setTask('')
                            setLoading(true)
                        }}
                        value = {task}
                        
                    /> : <></>}
            <View style={styles.subContainer}>
                <Text style={styles.boxText}>Pendentes</Text>
                <ScrollView style={styles.boxList}>
                    {
                        pending.map(e => {
                            return <Completed msg = {e[0]}
                                    onPress = {() => {

                                        let completeds = [...completed]
                                        let pendings = []

                                        uptadeTasks(e[1], e[0])

                                        pending.map((e2) => {

                                            if(e2[0] != e[0])
                                                pendings.push(e2)
                                            else
                                                completeds.push(e2)
                                              
                                        })

                                        setPending(pendings)
                                        setCompleted(completeds)
                                    }}

                                    onPressEdit = {() => {
                                
                                        let pendings = []
                                        delTasks(e[1]);
                                        
                                        pending.map((e2) => {

                                            if(e2[0] != e[0])
                                                pendings.push(e2)
                                              
                                        })

                                        setPending(pendings)
                                        setInput(e[0])
                                        setTask(e[0])

                                    }}
                            />
                        })
                    }
                </ScrollView>
                <Text style={styles.boxText}>Concluídos</Text>
                <ScrollView style={styles.boxList} >
                   {

                        completed.map(e => {
                            return <Pending msg = {e[0]}/>
                        })
                   }
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
    },

    boxList: {
        height: 50,
        padding: 10,
        margin: 5
    },

    boxText:{
        fontFamily: 'courier',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#8b008b'
    },

    subContainer:{
        height: '75%',
    },

    
})