import { toYYYYMMDD } from '@/util';

type PostDateProps = {
  createdAt: string;
};

export const PostDate = ({ createdAt }: PostDateProps) => {
  const date = new Date(createdAt);
  return <div className="text-sm text-silver mb-2">작성일 · {toYYYYMMDD(date)}</div>;
};
