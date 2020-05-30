import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class Mobile extends Component {
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
                    <Text style={styles.titulo}>Mobile</Text>
                    <Image source={require('../imagens/mobile.gif')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
A comissão Mobile é responsável por desenvolver aplicativos, visando aprender fundamentos do desenvolvimento de aplicativos móveis utilizando tecnologias de interesse na atualidade.
                    `}</Text>

                </View>
            </View>
        );
    }
}
export default Mobile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#10aa9a',
    },


    topo:{
        position: 'absolute', 
        left: 20, 
        right: 0, 
        top: 25,
    },
    imagens:{
        position: 'absolute',
        top: 100,
        left: 0,
        width: 350,
        height:260,
    },
    texto:{
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 370,
    },
    titulo:{
        color: 'white',
        fontSize: 50,
        left: 110,
        top: 20,
    },
});