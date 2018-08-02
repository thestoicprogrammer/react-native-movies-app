import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

import { MovieDisplay } from '../client/components'
import axios from 'axios'

let API_KEY = "e060bf54cfdff37d5349ff41f59f21dc"
let API_URL = "https://api.themoviedb.org/3/movie/top_rated"
let PAGE_SIZE = 1;
let PARAMS = `?api_key=${API_KEY}&language=en-US&page=${PAGE_SIZE}`
let REQUEST_URL = API_URL + PARAMS

export default class FirstScreen extends Component {
  static navigationOptions = {
    title: 'GoForCode Movies',
    
    headerStyle: {
      backgroundColor: '#107896',
      borderBottomWidth: 5,
      borderBottomColor: '#ddd'
      },
      headerTitleStyle: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'Bebas Neue',
      alignItems: 'center',
      }
  }

  state = {
    movieResultsFeed: [],
    loaded: false,
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    await axios.get(REQUEST_URL)
    .then(res => {
      // alert(res)
      this.setState({ 
        movieResultsFeed: res.data.results,
        loaded: true,
       })
      })
  }

  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
  
         {/* Scroll Container */}
         <ScrollView style={styles.scrollContainer}>
          {
            this.state.movieResultsFeed.map((movie,key) => {
              return <MovieDisplay
                        key={key}
                        id={movie.id} 
                        movie={movie}
                        navigate={navigate}
              />
            })
          }
        </ScrollView>
        {/* End of Scroll Container*/}

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.btnLeft}>
          <AwesomeButtonRick
            type="primary"
            width={100}
            height={40}
            styles={styles.btnOne}
          >Sort A-Z</AwesomeButtonRick>
          </View>
          <View>
          <AwesomeButtonRick
            type="secondary"
            width={130}
            height={40}
          >Sort By Year</AwesomeButtonRick>
          </View>
          
        </View>
        {/* End */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#ddd',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 52,
    borderTopWidth: 5,
    borderTopColor: '#107896'
  },
  btnLeft: {
    marginRight: 10,
  }
})