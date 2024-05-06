import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Root = ({ children }: Props) => {
  // TODO: useContext로 데이터 전달하기

  return <div className="max-w-[900px] mx-auto py-36">{children}</div>;
};
