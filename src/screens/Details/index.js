import React, {useEffect} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useGetCharacterQuery} from '../../store/api/rickandmorty';
import {Seasons, CharacterInfo} from '../../components';

export const Details = ({route}) => {
  const {data, isError} = useGetCharacterQuery(route.params.id);

  useEffect(() => {
    if (isError) {
      Alert.alert('There was an error loading the characters.');
    }
  }, [isError]);

  return (
    <SafeAreaView>
      <View>
        {Boolean(data) && (
          <>
            <Image source={{uri: data.image}} style={styles.image} />
            <CharacterInfo title="Name: " text={data.name} />
            <CharacterInfo title="Gender: " text={data.gender} />
            <CharacterInfo title="Species: " text={data.species} />
            <CharacterInfo title="Status: " text={data.status} />
            <CharacterInfo title="Origin: " text={data.origin.name} />
            <CharacterInfo title="Location: " text={data.location.name} />
            <Seasons episodes={data?.episode} />
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
});
