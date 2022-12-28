import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {Button, Seasons} from '../../components';
import theme from '../../config/theme';
import {DETAILS_SCREEN} from '../../navigation/screens';
import {
  rickandmortyApi,
  useLazyGetCharactersQuery,
} from '../../store/api/rickandmorty';

export const Home = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [getCharacters, {data, error, isLoading}] = useLazyGetCharactersQuery();
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    if (data?.results) {
      const res = characters;
      data.results.forEach(item =>
        res.findIndex(old => item.id === old.id) < 0 ? res.push(item) : null,
      );
      setCharacters(res);
    }

    if (error) {
      Alert.alert('There was an error loading the characters.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  const renderItems = ({item}) => (
    <TouchableOpacity
      style={styles.item__container}
      onPress={() => openDetails(item.id)}>
      <Image source={{uri: item.image}} style={styles.item__image} />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.status}</Text>
        <Seasons episodes={item?.episode} />
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
    Alert.alert(
      'Reset will clean all the result from the list',
      'Are you sure you whant to it?',
      [
        {
          text: 'Reset',
          onPress: () => {
            dispatch(rickandmortyApi.util.resetApiState());
            setPage(1);
            setCharacters([]);
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
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
            isLoading && (
              <ActivityIndicator size="large" color={theme.color.black} />
            )
          }
          ListFooterComponent={() =>
            isLoading &&
            characters.length > 0 && (
              <ActivityIndicator size="large" color={theme.color.black} />
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
    backgroundColor: theme.color.lightGray,
    marginVertical: 4,
  },
  item__image: {
    marginRight: 20,
    width: 175,
    height: 175,
  },
});
