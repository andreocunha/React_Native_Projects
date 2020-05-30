import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class EletroPET extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Left style={styles.topo}>
                        <Icon name="menu" onPress={()=>
                            this.props.navigation.openDrawer()}/>
                    </Left>
                </Header>

                <View >
                    <Text style={styles.titulo}>EletroPET</Text>
                    <Image source={require('../imagens/eletronica.gif')} style={styles.imagem1}/>
                    <Text style={styles.texto}>{`
    A comissão EletroPET é responsável por desenvolver projetos que envolvam microcontroladores, como Arduino, e programação. Ele tem o intuito de colocar na prática o que foi aprendido na teoria.
    Alguns projetos já foram desenvolvidos, tais como a tranca biometrica da sala do PET.
                    `}</Text>
                    <Image source={require('../imagens/trancaPET.jpeg')} style={styles.imagem2}/>
                    <Text style={{color:'white', top: 420, left:130}}>Tranca do PET</Text>
                </View>

            </View>
        );
    }
}
export default EletroPET;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
    },
    topo:{
        position: 'absolute', 
        left: 20, 
        right: 0, 
        top: 25,
    },
    imagem1:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 150,
        height:110,
    },
    imagem2:{
        position: 'absolute',
        top: 320,
        left: 80,
        width: 200,
        height:140,
        borderRadius: 40,

    },
    titulo:{
        color: 'white',
        fontSize: 40,
        left: 160,
        top: 40,
    },
    texto:{
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 130,
    },
});