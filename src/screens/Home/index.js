import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from '../../components/button';
import {DETAILS_SCREEN} from '../../navigation/screens';
import {useLazyGetCharactersQuery} from '../../store/api/rickandmorty';

export const Home = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [getCharacters, {data, error, isLoading, isSuccess}] =
    useLazyGetCharactersQuery();

  const navigation = useNavigation();

  useEffect(() => {
    if (data?.results) {
      setCharacters(prev => [...prev, ...data.results]);
    }

    if (error) {
      Alert.alert('There was an error loading the characters.');
    }
  }, [data, error]);

  const renderItems = ({item}) => (
    <TouchableOpacity
      style={styles.item__container}
      onPress={() => openDetails(item.id)}>
      <Image source={{uri: item.image}} style={styles.item__image} />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.status}</Text>
        <Text>
          Season 1:{' '}
          {
            item?.episode?.filter(
              url =>
                parseInt(url.split('/')[url.split('/').length - 1], 10) <= 11,
            ).length
          }
        </Text>
        <Text>
          Season 2:{' '}
          {
            item?.episode?.filter(
              url =>
                parseInt(url.split('/')[url.split('/').length - 1], 10) > 11 &&
                parseInt(url.split('/')[url.split('/').length - 1], 10) <= 21,
            ).length
          }
        </Text>
        <Text>
          Season 3:{' '}
          {
            item.episode.filter(
              url =>
                parseInt(url.split('/')[url.split('/').length - 1], 10) > 21 &&
                parseInt(url.split('/')[url.split('/').length - 1], 10) <= 31,
            ).length
          }
        </Text>
        <Text>
          Season 4:{' '}
          {
            item.episode.filter(
              url =>
                parseInt(url.split('/')[url.split('/').length - 1], 10) > 31 &&
                parseInt(url.split('/')[url.split('/').length - 1], 10) <= 41,
            ).length
          }
        </Text>
        <Text>
          Season 5:{' '}
          {
            item.episode.filter(
              url =>
                parseInt(url.split('/')[url.split('/').length - 1], 10) > 41 &&
                parseInt(url.split('/')[url.split('/').length - 1], 10) <= 51,
            ).length
          }
        </Text>
      </View>
    </TouchableOpacity>
  );

  const openDetails = id => {
    navigation.navigate(DETAILS_SCREEN, {id});
  };

  const loadData = () => {
    getCharacters(page);
    setPage(prev => prev + 1);
  };

  const reset = () => {
    setPage(1);
    setCharacters([]);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button text="RESET" onPress={reset} />
        <FlatList
          ListEmptyComponent={() => <Text>Pull to load data</Text>}
          onRefresh={() => !isLoading && loadData()}
          onEndReached={() => !isLoading && loadData()}
          keyExtractor={({id}) => id}
          renderItem={renderItems}
          refreshing={isLoading}
          data={characters}
          ListHeaderComponent={() =>
            isLoading && <ActivityIndicator size="large" color="#000000" />
          }
          ListFooterComponent={() =>
            isLoading &&
            characters.length > 0 && (
              <ActivityIndicator size="large" color="#000000" />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  item__container: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    marginVertical: 4,
  },
  item__image: {
    width: 175,
    height: 175,
  },
});
