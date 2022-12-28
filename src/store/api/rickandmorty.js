import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const rickandmortyApi = createApi({
  reducerPath: 'rickandmortyApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api/'}),
  endpoints: builder => ({
    getCharacters: builder.query({
      query: page => `character/?page=${page}`,
    }),
    getCharacter: builder.query({
      query: id => `character/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLazyGetCharactersQuery, useGetCharacterQuery} =
  rickandmortyApi;
