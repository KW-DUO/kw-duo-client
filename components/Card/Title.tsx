type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return <div className="mb-4 font-bold h-11 line-clamp-2">{title}</div>;
};
