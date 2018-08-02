import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NativeRouter, Link } from 'react-router-native'
import { Navigation, Card } from 'react-router-navigation'

const MovieDisplay = (props) => {
  const renderMovieFeed = 
  props.movie.length != 0 ? (
    <View style={styles.displayMovieContainer} key={props.id} >
      <Image
        source={{uri: `https://image.tmdb.org/t/p/original${props.movie.poster_path}`}}
        style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{props.movie.title}</Text>
        <Text style={styles.meta}>{props.movie.release_date}</Text>
        <Text style={styles.meta}>ID: {props.id}</Text>
        <Text style={styles.meta}>Popularity: {props.movie.popularity}</Text>
        <Text style={styles.meta}>Vote average: {props.movie.vote_average}</Text>
      </View>
      {/* Nav Arrow*/}
        <TouchableOpacity onPress={() => alert("Detail Screen")} style={styles.addButton}>
          <Text>></Text>
        </TouchableOpacity>
      {/* End */}
    </View>
  ) : (
    <View>
      <Text>
        No movies found!
      </Text>
    </View>
  )
  return renderMovieFeed
}

var styles = StyleSheet.create({
  displayMovieContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
    padding: 10,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  meta: {
    textAlign: 'center',
  },
});

export default MovieDisplay