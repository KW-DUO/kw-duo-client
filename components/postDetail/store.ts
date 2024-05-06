import { createContext } from 'react';

export const PostDetailContext = createContext(null);

export function usePostDetailContext() {
  return PostDetailContext;
}
