import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image} from 'react-native';
import { createDrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import PET from './pages/PET';
import ADM from './pages/ADM';
import Steps from './pages/Steps';
import Pulga from './pages/Pulga';
import introcomp from './pages/introcomp';
import InterPET from './pages/InterPET';
import Mobiliza from './pages/Mobiliza';
import Topcom from './pages/Topcom';
import Web from './pages/Web';
import Manutencao from './pages/Manutencao';
import Mobile from './pages/Mobile';
import Monitorias from './pages/Monitorias';
import EletroPET from './pages/EletroPET';
import Jacee from './pages/Jacee';

export default class App extends React.Component {
  render(){
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={styles.container}>
    <View style = {{height:120,backgroundColor: 'white', borderRadius: 20, }}>
      <Image source={require('./imagens/Comissoes.gif')} style={styles.imagem} />
      <Text style={{color:'blue', fontSize:25, left: 140, top: -70}}>COMISSÕES</Text>
    </View>
    <ScrollView >
      <DrawerItems {...props} activeTintColor='yellow' inactiveTintColor='white'/>
    </ScrollView>
  </SafeAreaView>

);

const AppDrawerNavigator = createDrawerNavigator({
  PET:PET,
  ADM: ADM,
  Steps: Steps,
  Pulga: Pulga,
  INTROCOMP: introcomp,
  InterPET: InterPET,
  Mobiliza: Mobiliza,
  Topcom: Topcom,
  Web: Web,
  Manutencao: Manutencao,
  Mobile: Mobile,
  Monitorias: Monitorias,
  EletroPET: EletroPET,
  Jacee: Jacee,
},{
  contentComponent: CustomDrawerComponent
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223b48',

  },
  imagem: {
    height: 120,
    width:140,
  }
});
