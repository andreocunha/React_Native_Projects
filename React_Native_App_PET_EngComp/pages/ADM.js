import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class ADM extends Component {
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
                    <Text style={styles.titulo}>Administração</Text>
                    <Image source={require('../imagens/administracao.gif')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
A comissão administração é responsável por fazer todos os registros de documentos, organização de provas e compra de equipamentos para a manutenção interna do PET.
                    `}</Text>

                </View>
            </View>
        );
    }
}
export default ADM;

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
        top: 70,
        left: 20,
        width: 300,
        height:110,
    },
    texto:{
        fontSize: 15,
        color: 'white',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 180,
    },
    titulo:{
        color: 'white',
        fontSize: 30,
        left: 90,
        top: 15,
    },
});