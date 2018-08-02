import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Header } from '../../common'
import { MovieDisplay } from '../../components'
import axios from 'axios'
import { StackNavigator } from 'react-navigation';

let API_KEY = "e060bf54cfdff37d5349ff41f59f21dc"
let API_URL = "https://api.themoviedb.org/3/movie/top_rated"
let PAGE_SIZE = 1;
let PARAMS = `?api_key=${API_KEY}&language=en-US&page=${PAGE_SIZE}`
let REQUEST_URL = API_URL + PARAMS

class AllMoviesContainer extends Component {

  render() {

    return (
      //Container
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Header />
        </View>
        {/* End */}

        {/* Scroll Container */}
        <ScrollView style={styles.scrollContainer}>
          {
            this.state.movies.map((movie,key) => {
              return <MovieDisplay
                        key={key}
                        id={movie.id} 
                        movie={movie}
              />
            })
          }
        </ScrollView>
        {/* End */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
})

export default AllMoviesContainer