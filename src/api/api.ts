import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {ART_FOR_PAGE, ART_RECOMMENDED_LIMIT_FOR_PAGE, ARTLIST_LIMIT} from "@/constants/constants";


export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
}

export interface ArtworkById extends Artwork {
  date_start: number;
  date_end: number;
  place_of_origin: string;
  dimensions: string | null;
  credit_line: string;
  copyright_notice: string | null;
}

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/',
});

export async function getArtLists(query: string | undefined, page: number) {
  try {
    const response: AxiosResponse = await instance.get('artworks/search', {
      params: {
        q: query,
        page,
        limit: ART_FOR_PAGE,
        fields: 'id,artist_title,title,image_id',
      },
    });

    return [response.data.data, response.data.pagination];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getRecommendedArts(): Promise<Artwork[]> {
  try {
    const response: AxiosResponse = await instance.get('artworks', {
      params: {
        page: Math.floor(Math.random() * ARTLIST_LIMIT),
        limit: ART_RECOMMENDED_LIMIT_FOR_PAGE,
        fields: 'id,title,artist_title,image_id',
      },
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getArtById = async (id: number): Promise<ArtworkById> => {
  try {
    const response = await instance.get(`/artworks/${id}`, {
      params: {
        id,
        fields:
          'dimensions,place_of_origin,copyright_notice,artist_title,title,image_id,date_start,date_end,credit_line',
      },
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
