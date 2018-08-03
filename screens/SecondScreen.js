import React, { Component } from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'

export default class SecondScreen extends Component {
  static navigationOptions = {
    title: 'Movie Description',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#107896',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd',
      },
      headerTitleStyle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Arial',
      alignItems: 'center',
      },
  }

  render() {
    let { params } = this.props.navigation.state;
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
        {params.title} 
        </Text>
        <View style={styles.imgContainer}>
          <Image 
            style={styles.thumbnail}
            source={{uri: params.imgURL }}
          />
        </View>
        <Text style={styles.meta}>Catalogue #: {params.catalogue}</Text>
        <Text style={styles.meta}>Release Date: {params.date}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin:10,
    color: 'black',
    fontFamily: 'Arial',
  },
  thumbnail: {
    width: 200,
    height: 200,
  },
  imgContainer: {
    borderWidth: 3,
    borderColor: '#107896',
  },
  meta: {
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontFamily: 'Arial',
  },
})