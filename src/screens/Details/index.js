import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetCharacterQuery} from '../../store/api/rickandmorty';

export const Details = ({route}) => {
  const {data} = useGetCharacterQuery(route.params.id);
  console.log(data);
  return (
    <SafeAreaView>
      <View>
        {data && (
          <>
            <Image source={{uri: data.image}} style={styles.image} />
            <Text>
              <Text style={styles.key}>Name:</Text> {data.name}
            </Text>
            <Text>
              <Text style={styles.key}>Gender</Text>: {data.gender}
            </Text>
            <Text>
              <Text style={styles.key}>Species</Text>: {data.species}
            </Text>
            <Text>
              <Text style={styles.key}>Status</Text>: {data.status}
            </Text>
            <Text>
              <Text style={styles.key}>Origin</Text>: {data.origin.name}
            </Text>
            <Text>
              <Text style={styles.key}>Location</Text>: {data.location.name}
            </Text>
            <Text>
              <Text style={styles.key}>Season 1:</Text>{' '}
              {
                data.episode?.filter(
                  url =>
                    parseInt(url.split('/')[url.split('/').length - 1], 10) <=
                    11,
                ).length
              }
            </Text>
            <Text>
              <Text style={styles.key}>Season 2:</Text>{' '}
              {
                data.episode?.filter(
                  url =>
                    parseInt(url.split('/')[url.split('/').length - 1], 10) >
                      11 &&
                    parseInt(url.split('/')[url.split('/').length - 1], 10) <=
                      21,
                ).length
              }
            </Text>
            <Text>
              <Text style={styles.key}>Season 3:</Text>{' '}
              {
                data.episode.filter(
                  url =>
                    parseInt(url.split('/')[url.split('/').length - 1], 10) >
                      21 &&
                    parseInt(url.split('/')[url.split('/').length - 1], 10) <=
                      31,
                ).length
              }
            </Text>
            <Text>
              <Text style={styles.key}>Season 4:</Text>{' '}
              {
                data.episode.filter(
                  url =>
                    parseInt(url.split('/')[url.split('/').length - 1], 10) >
                      31 &&
                    parseInt(url.split('/')[url.split('/').length - 1], 10) <=
                      41,
                ).length
              }
            </Text>
            <Text>
              <Text style={styles.key}>Season 5:</Text>{' '}
              {
                data.episode.filter(
                  url =>
                    parseInt(url.split('/')[url.split('/').length - 1], 10) >
                      41 &&
                    parseInt(url.split('/')[url.split('/').length - 1], 10) <=
                      51,
                ).length
              }
            </Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  key: {
    fontWeight: 'bold',
  },
});
