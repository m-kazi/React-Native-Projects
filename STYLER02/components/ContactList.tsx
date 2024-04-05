import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Tanim',
      designation: 'App Developer',
      imageUrl:
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uid: 2,
      name: 'Kazi',
      designation: 'Python Developer',
      imageUrl:
        'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uid: 3,
      name: 'Kazzcode',
      designation: 'Devops',
      imageUrl:
        'https://images.pexels.com/photos/11035393/pexels-photo-11035393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uid: 4,
      name: 'Mo',
      designation: 'Database Admin',
      imageUrl:
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, designation, imageUrl}) => (
          // using 'uid' as a unique id to not look into the same opbject
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userDesignation}>{designation}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  container: {
    paddingHorizontal: 10,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#A87CA0',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  userName: {
    fontSize: 15,
    fontWeight: '700',
  },
  userDesignation: {
    fontSize: 12,
  },
});
