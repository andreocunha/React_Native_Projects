import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import {Header, Left, Icon} from 'native-base';

class Web extends Component {
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
                    <Text style={styles.titulo}>Web</Text>
                    <Image source={require('../imagens/web.gif')} style={styles.imagens}/>
                    <Text style={styles.texto}>{`
A comissão Web é responsável por criar e desenvolver sites que serão utilizados em diversos projetos, tais como Topcom, Jacee, site do PET entre outros.
                    `}</Text>

                </View>
            </View>
        );
    }
}
export default Web;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffd200',
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
        height:200,
    },
    texto:{
        fontSize: 18,
        color: 'black',
        position: 'absolute',
        left: 30, 
        right: 30, 
        top: 280,
    },
    titulo:{
        color: 'black',
        fontSize: 50,
        left: 130,
        top: 15,
    },
});