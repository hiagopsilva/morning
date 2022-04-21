import { AxiosRequestConfig } from 'axios';
import { Storage } from '~/services';

type CustomRequest = {
  authorization?: string;
};

export const interceptRequest = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig & CustomRequest> => {
  const authorization = await Storage.getToken();

  if (!authorization) {
    return {
      ...config,
      baseURL: 'http://localhost:3333',
      headers: {
        ...config.headers,
        'x-token': '',
      },
    };
  }
  return {
    ...config,
    baseURL: 'http://localhost:3333',
    headers: {
      ...config.headers,
      'x-token': '',
      authorization,
    },
  };
};
