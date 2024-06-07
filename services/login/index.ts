import { AuthUser } from '@/queries/queryKeys';
import { client } from '@/util/HttpClient';

export const getAuthInfo = async (): Promise<AuthUser> => {
  const userInfo = await client.fetch<AuthUser>('/auth/info', 'GET', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return userInfo;
};
