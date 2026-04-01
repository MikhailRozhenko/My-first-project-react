// src/services/articleService.ts

import axios from 'axios';
import { type Article } from '../types/articles';

interface ArticlesHttpResponse {
  hits: Article[];
  nbPages: number;
}

export const fetchArticles = async (topic: string, page: number = 1) => {
  const response = await axios.get<ArticlesHttpResponse>(
    'https://hn.algolia.com/api/v1/search',
    {
      params: {
        query: topic,
        page,
        hitsPerPage: 5,
      },
    },
  );

  return response.data;
};
