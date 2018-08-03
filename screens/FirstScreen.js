import React, { Component } from 'react'
import { View, StyleSheet, ScrollView,TouchableOpacity,Text} from 'react-native'
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import { MOVIE_DB_API_KEY } from '../config/keys'

import { MovieDisplay } from '../client/components'
import axios from 'axios'

const API_URL = "https://api.themoviedb.org/3/movie/top_rated"
const PAGE_SIZE = 1;
const PARAMS = `?api_key=${MOVIE_DB_API_KEY}&language=en-US&page=${PAGE_SIZE}`
const REQUEST_URL = API_URL + PARAMS

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
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Arial',
      textAlign:"center", 
      flex:1,
      },
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
      this.setState({ 
        movieResultsFeed: res.data.results,
        loaded: true,
       })
      })
      .catch(err => {
        alert(err)
      })
  }

  sortMovieListAtoZ = () => {
    const newMovieResultsFeed = this.state.movieResultsFeed.sort(function(a, b){
      let movieA=a.title.toLowerCase(), movieB=b.title.toLowerCase();
      if (movieA < movieB) //sort string ascending
       return -1;
      if (movieA > movieB)
       return 1;
      return 0; //default return value (no sorting)
     });
     this.setState({
      movieResultsFeed: newMovieResultsFeed
     })
  }

  sortMovieListByReleaseDate = () => {
    const newMovieResultsFeed = this.state.movieResultsFeed.sort(function(a, b){
      let movieA=a.release_date.toLowerCase(), movieB=b.release_date.toLowerCase();
      if (movieA < movieB) //sort string ascending
       return -1;
      if (movieA > movieB)
       return 1;
      return 0; //default return value (no sorting)
     });
     this.setState({
      movieResultsFeed: newMovieResultsFeed
     })
  }

  render() {
    let { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
  
         {/* Scroll Container */}
         <ScrollView 
         ref={(c) => {this.scroll = c}}
         style={styles.scrollContainer}>
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
              onPress={() => this.sortMovieListAtoZ()}
              type="primary"
              width={100}
              height={40}
              styles={styles.btnOne}
            >Sort A-Z</AwesomeButtonRick>
          </View>

          <View>
            <AwesomeButtonRick
              onPress={() => this.sortMovieListByReleaseDate()}
              type="secondary"
              width={130}
              height={40}
            >Sort By Year</AwesomeButtonRick>
          </View>
          
        </View>
        {/* End */}

        {/* Add Button */}
        <TouchableOpacity onPress={() => this.scroll.scrollTo({x: 0, y: 0, animated: true})} style={styles.addButton}>
            <Text style={styles.addButtonText}>TOP</Text>
        </TouchableOpacity>
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
    marginBottom: 50,
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
  },
  addButtonText: {
    color: '#fff',
    fontSize: 15
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 15,
    bottom: 65,
    backgroundColor: '#107896',
    width: 50,
    height: 50,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
})