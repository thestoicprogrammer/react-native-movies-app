import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Header } from '../../common'
import { MovieDisplay } from '../../components'
import axios from 'axios'

let API_KEY = "e060bf54cfdff37d5349ff41f59f21dc"
let API_URL = "https://api.themoviedb.org/3/movie/top_rated"
let PAGE_SIZE = 1;
let PARAMS = `?api_key=${API_KEY}&language=en-US&page=${PAGE_SIZE}`
let REQUEST_URL = API_URL + PARAMS

class MoviesContainer extends Component {

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
            this.state.movieResultsFeed.map((movie,key) => {
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
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#107896',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },
  scrollContainer: {
    flex: 1,
  },
})

export default MoviesContainer
