import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import api from '../libs/api'
import { IFilm, MediaType } from '../types/film-types'
import { formatFilmResponse } from '../utils/format'

export const useWeekTrending = (mediaType: MediaType): IFilm[] => {
  try {
    const { data } = useQuery({
      queryKey: [`trending-${mediaType}`],
      queryFn: async () =>
        await api.get<unknown, AxiosResponse<{ results: unknown[] }>>(
          `/trending/${mediaType}/week`
        ),
      staleTime: 1000 * 60 * 1,
    })
    const results = data?.data.results
    return results!?.map((item) => formatFilmResponse(item, mediaType))
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const useTheaters = (): IFilm[] => {
  try {
    const { data } = useQuery({
      queryKey: ['theaters'],
      queryFn: async () =>
        await api.get<unknown, AxiosResponse<{ results: unknown[] }>>(
          '/movie/now_playing'
        ),
      staleTime: 1000 * 60 * 1,
    })
    const results = data?.data.results
    return results!?.map((item) => formatFilmResponse(item, 'movie'))
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const usePopulars = (mediaType: MediaType, page = 1): IFilm[] => {
  try {
    const { data } = useQuery({
      queryKey: ['populars'],
      queryFn: async () =>
        await api.get<unknown, AxiosResponse<{ results: unknown[] }>>(
          `/${mediaType}/popular`,
          {
            params: { page },
          }
        ),
    })
    const results = data?.data.results
    return results!?.map((item) => formatFilmResponse(item, mediaType))
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const useTopRated = (mediaType: MediaType, page = 1): IFilm[] => {
  try {
    const { data } = useQuery({
      queryKey: [`rated-${mediaType}`],
      queryFn: async () =>
        await api.get<unknown, AxiosResponse<{ results: unknown[] }>>(
          `/${mediaType}/top_rated`,
          {
            params: { page },
          }
        ),
    })
    const results = data?.data.results
    return results!?.map((item) => formatFilmResponse(item, mediaType))
  } catch (err) {
    console.log(err)
    throw err
  }
}
