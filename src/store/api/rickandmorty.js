import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const rickandmortyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  tagTypes: ['characters'],
  endpoints: () => ({}),
});

rickandmortyApi.injectEndpoints({
  endpoints: builder => ({
    getCharacters: builder.query({
      query: page => `character/?page=${page}`,
    }),
    getCharacter: builder.query({
      query: id => `character/${id}`,
    }),
  }),
});

export const {useLazyGetCharactersQuery, useGetCharacterQuery} =
  rickandmortyApi;
