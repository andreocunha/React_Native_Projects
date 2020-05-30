import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class Manutencao extends Component {
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
                    <Text style={styles.titulo}>Manutenção</Text>
                    <Image source={require('../imagens/manutencao2.gif')}  style={styles.imagem2}/>
                    <Image source={require('../imagens/manutencao.gif')}  style={styles.imagem1}/>
                    <Text style={styles.texto}>{`
A comissão Manutenção é responsável por fazer todos os reparos dos computadores e servidores do PET. Além de configurar o sistema dos computadores dos laboratórios do Ct9 da Ufes quando ocorre o evento do Topcom.
                    `}</Text>

                </View>
            </View>
        );
    }
}
export default Manutencao;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },


    topo:{
        position: 'absolute', 
        left: 20, 
        right: 0, 
        top: 25,
    },
    imagem2:{
        position: 'absolute',
        top: 100,
        left: 20,
        width: 180,
        height:180,

    },
    imagem1:{
        position: 'absolute',
        top: 150,
        left: 250,
        width: 100,
        height:120,

    },
    texto:{
        fontSize: 17,
        color: 'black',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 300,
    },
    titulo:{
        color: 'black',
        fontSize: 40,
        left: 70,
        top: 15,
    },
});