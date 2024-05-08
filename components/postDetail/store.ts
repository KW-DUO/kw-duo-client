import { createContext } from 'react';
import { PostDetail } from '@/types';

export const PostDetailContext = createContext<PostDetail | null>(null);
