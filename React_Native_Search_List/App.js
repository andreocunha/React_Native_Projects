import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { SearchBar, Icon, Image } from 'react-native-elements';


const data = [
  {
    name: "Pedreiro"
  },
  {
    name: "Encanador"
  },
  {
    name: "Marceneiro"
  },
  {
    name: "Pintor"
  },
  {
    name: "Arquiteto"
  },
  {
    name: "Engenheiro"
  },
  {
    name: "Medico"
  },
  {
    name: "Farmaceutico"
  },
  {
    name: "Professor"
  },
  {
    name: "Caminhoneiro"
  },
  {
    name: "Guarda"
  },
  {
    name: "Ciclista"
  },
  {
    name: "Eletricista"
  },
  {
    name: "Amigo"
  },
  {
    name: "Pedreste"
  },
  
]

export default class App extends React.Component{

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  callFun = () =>
  {
    alert("Clicou na imagem!!!");
  }
  
  render(){
    const { search } = this.state;

    const filteredData = data.filter((item) => {
      return item.name.indexOf(this.state.search) >= 0
    })

    return(
      <View style={styles.container}>
        <View style={{ margin : 20, backgroundColor: 'black' }}>
          <View>
            <SearchBar placeholder="Search" 
            style={{ fontSize: 20, marginLeft: 10, backgroundColor: 'white', borderRadius: 15, marginTop: 25, height: 40}} 
            onChangeText={this.updateSearch}
        value={search}
            />
          </View>

          <ScrollView>
          { filteredData.map((item, index) => {
            return <View style={[styles.InlineItem, styles.borderBottom, {padding: 10}]}>
              <Icon
                raised
                name='star'
                type='font-awesome'
                color='#f50'
                onPress={() => alert('Alguma informação aqui sobre o trabalhador...')} />

              <Text style={{alignSelf: "center", width: "50%", color: 'white', fontSize: 20}}>{item.name}</Text>

              <TouchableOpacity activeOpacity = { .4 } onPress={ this.callFun }>
                <Image
                  source={require('./assets/pedreiro.jpg')}
                  style={{ width: 100, height: 100 }}
                />
              </TouchableOpacity>
              
              </View>
          })}
          </ScrollView>
        </View>
      </View>
      
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

  },
  InlineItem: {
    flexDirection: 'row'
  },
});