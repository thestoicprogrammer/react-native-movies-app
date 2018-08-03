import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const MovieDisplay = (props) => {
  const imgURL = `https://image.tmdb.org/t/p/original${props.movie.poster_path}`
  const renderMovieFeed = 
  props.movie.length != 0 ? (
    <View style={styles.displayMovieContainer} key={props.id} >
      <Image
        source={{uri: imgURL }}
        style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={() => props.navigate("Second", {title: props.movie.title, imgURL, catalogue: props.id, date: props.movie.release_date})} style={styles.addButton}>
          <Text style={styles.title}>{props.movie.title}</Text>
        </TouchableOpacity>
        {/* <Text style={styles.title}>{props.movie.title}</Text> */}
        <Text style={styles.meta}>Release Date: {props.movie.release_date}</Text>
        <Text style={styles.meta}>Popularity: {props.movie.popularity}</Text>
        <Text style={styles.meta}>Vote average: {props.movie.vote_average}</Text>
      </View>
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
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  meta: {
    textAlign: 'center',
  },
});

export default MovieDisplay