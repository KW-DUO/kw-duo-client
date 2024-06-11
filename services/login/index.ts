import { AuthUser } from '@/queries/queryKeys';
import { client } from '@/util/HttpClient';

export const getAuthInfo = async (): Promise<AuthUser> => {
  return client.fetch<AuthUser>('/auth/info', 'GET', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
