import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class InterPET extends Component {
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
                    <Image source={require('../imagens/interpet.png')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
O InterPET é um grupo composto por 2 representantes de cada PET – UFES, com o objetivo de uma melhor organização das atividades realizadas em conjunto por estes grupos e também favorecer as discussões sobre o Programa de Educação Tutorial dentro da comunidade acadêmica. É um grupo para se discutir assuntos comuns aos PETs e para socialização das experiências vivenciadas pelos bolsistas.
                    `}</Text>

                </View>
            </View>
        );
    }
}
export default InterPET;

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
    imagens:{
        position: 'absolute',
        top: 50,
        left: 20,
        width: 300,
        height:70,
        
    },
    texto:{
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 150,
    }
});