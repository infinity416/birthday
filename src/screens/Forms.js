import React, { useState, useEffect} from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image, ScrollView} from 'react-native';
import {Item, Input, Text, Button} from "native-base";
import fiddel from "../assets/fiddelbrithday.png";
import {map} from "../utils/firebase";
import firebase from "../utils/firebase";
import "firebase/database";
import moment from 'moment';

export default function Forms(props) {
    const [name, setName] = useState();
    const [apellido, setApellido] = useState();
    const [dia, setDia] = useState();
    const [mes, setMes] = useState();
    const [año, setAño] = useState();

    const onSubmit= () => {
        if(name.length, apellido.length, dia.length, mes.length, año.length > 0){
            const year = moment().format("YYYY");
            const eddad = year-año;
            firebase.database().ref("general").push({nombre: name, apellidos: apellido, edad: eddad})
            setName("");
            setApellido("");
            setDia("");
            setMes("");
            setAño("");
        }
    };

   
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View>
                <Image source={fiddel} resizeMode="contain" style={styles.logo}/>
            </View>
            <Item>
                <Input 
                    placeholder="Nombre" 
                    style={{color:"#00FFDC"}} 
                    placeholderTextColor="#00FFDC"
                    value = {name}
                    onChange = {(e) => setName(e.nativeEvent.text)}
                />
                <Input 
                    placeholder="Apellidos" 
                    style={{color:"#00FFDC"}} 
                    placeholderTextColor="#00FFDC" 
                    value = {apellido}
                    onChange = {(e) => setApellido(e.nativeEvent.text)}/>
            </Item>
            <Text style={styles.textbirthday}>Fecha de Nacimiento</Text>
            <Item>
                <Input 
                    placeholder="Dia" 
                    keyboardType= "numeric"
                    style={{color:"#00FFDC"}} 
                    placeholderTextColor="#00FFDC"
                    value = {dia}
                    onChange = {(e) => setDia(e.nativeEvent.text)}
                />
                 <Input 
                    placeholder="Mes" 
                    keyboardType= "numeric"
                    style={{color:"#00FFDC"}} 
                    placeholderTextColor="#00FFDC"
                    value = {mes}
                    onChange = {(e) => setMes(e.nativeEvent.text)}
                />
                 <Input 
                    placeholder="Año" 
                    keyboardType= "numeric"
                    style={{color:"#00FFDC"}} 
                    placeholderTextColor="#00FFDC"
                    value = {año}
                    onChange = {(e) => setAño(e.nativeEvent.text)}
                />
            </Item>
            <Button style={styles.btnRegistro} onPress={onSubmit}>
                <Text style={styles.text}>Registrar</Text>
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 50,
        marginVertical: 30,
    },

    logo:{
        width: "100%",
        height: 200,
        marginBottom: 20,
    },

    text:{
        color: "#000000",
    },

    btnRegistro:{
        marginTop: 40,
        marginLeft: 30,
        width: 250,
        height:50,
        justifyContent: "center",
        backgroundColor: "#00FFDC",
    },

    textbirthday:{
        color:"#00FFDC",
        marginTop: 20, 
    },

    mostrar:{
        marginTop: 20,
        marginLeft: 60,
        width: "60%",
        height:80,
    }
})
