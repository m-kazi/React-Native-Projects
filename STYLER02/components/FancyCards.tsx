import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Golden Gate</Text>
          <Text style={styles.cardLabel}>Golden Gate Bridge</Text>
          <Text style={styles.cardDescription}>
            The Golden Gate Bridge is a suspension bridge spanning the Golden
            Gate, the one-mile-wide strait connecting San Francisco Bay and the
            Pacific Ocean.
          </Text>
          <Text style={styles.cardFooter}>Golden Gate, California</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  card: {
    width: 340,
    height: 300,
    marginVertical: 15,
    marginHorizontal: 10,
    padding: 2,
    borderRadius: 5,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 160,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom: 5,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardLabel: {
    fontSize: 15,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 5,
  },
  cardFooter: {},
});
