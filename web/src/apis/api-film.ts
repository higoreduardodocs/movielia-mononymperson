import { AxiosResponse } from 'axios'

import api from '../libs/api'
import { ITrailler, MediaType } from '../types/film-types'

export const apiTrailler = async (
  mediaType: MediaType,
  id: number
): Promise<ITrailler[]> => {
  try {
    const { data } = await api.get<
      unknown,
      AxiosResponse<{ results: unknown[] }>
    >(`/${mediaType}/${id}/videos`)

    return (
      data?.results
        .filter((item: any) => item.site.toLowerCase() === 'youtube')
        .map((item: any) => ({ id: item.id, key: item.key })) ?? []
    )
  } catch (err) {
    console.log(err)
    throw err
  }
}
