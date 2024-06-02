import { toYYYYMMDD } from '@/util';
import { useTranslation } from 'react-i18next';

type PostDateProps = {
  createdAt: string;
};

export const PostDate = ({ createdAt }: PostDateProps) => {
  const { t } = useTranslation();
  const date = new Date(createdAt);
  return (
    <div className="text-sm text-silver mb-2">
      {t('postDate.createdAtPrefix')}
      {toYYYYMMDD(date)}
    </div>
  );
};
