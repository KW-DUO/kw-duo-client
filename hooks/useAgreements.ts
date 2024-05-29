import { useEffect, useState } from 'react';

type AgreementProps = {
  id: number;
  text: string;
  agreed: boolean;
};

export const useAgreements = (initialAgreements: AgreementProps[]) => {
  const [agreements, setAgreements] = useState<AgreementProps[]>(initialAgreements);
  const [allAgreed, setAllAgreed] = useState(false);

  useEffect(() => {
    setAllAgreed(agreements.every((agreement) => agreement.agreed));
  }, [agreements]);

  const handleAgreementClick = (id: number) => {
    setAgreements((prevAgreements) =>
      prevAgreements.map((agreement) =>
        agreement.id === id ? { ...agreement, agreed: !agreement.agreed } : agreement
      )
    );
  };

  const handleAllAgree = () => {
    setAgreements((prevAgreements) =>
      prevAgreements.map((agreement) => ({ ...agreement, agreed: !allAgreed }))
    );
  };

  return { agreements, allAgreed, handleAgreementClick, handleAllAgree };
};
