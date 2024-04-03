import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in JavaScript ES12</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            With ES12, JavaScript has enabled the creation of private methods
            and properties natively. To create one, we have to prefix the
            identifier with a hash (#). Similar to private methods and
            properties, we can define private accessors (getters and setters)
            using the same syntax.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://kazzcode.hashnode.dev/how-to-install-react-native-on-linux-ubuntu-2204',
              )
            }>
            <Text>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 100,
  },
  bodyContainer: {},
  footerContainer: {},
});
