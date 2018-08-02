import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Header = () => (
    <Text style={styles.headerText}>GoForCode Movies</Text>
  )

export default Header

const styles = StyleSheet.create({
    headerText: {
      color: 'white',
      fontSize: 35,
      margin: 20,
      fontWeight: 'bold',
      fontFamily: 'Bebas Neue',
  },
})