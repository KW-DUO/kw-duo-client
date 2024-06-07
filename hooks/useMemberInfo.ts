import { AuthUser, queryKeys } from '@/queries/queryKeys';
import { getAuthInfo } from '@/services/login';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useAuthInfo = () => {
  const { data } = useQuery<AuthUser>({
    queryKey: queryKeys.auth.info(),
    queryFn: async () => await getAuthInfo(),
    staleTime: Infinity,
  });

  const queryClient = useQueryClient();

  if (!data) {
    return {
      isLoggedIn: false,
      memberId: null,
      revalidate: () => {},
    };
  }

  return {
    isLoggedIn: data.isLoggedIn,
    memberId: data.memberId,
    revalidate: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.auth.info(),
      }),
  };
};
