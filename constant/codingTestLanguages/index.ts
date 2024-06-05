export const codingTestLanguages = [
  { value: 'PYTHON', label: 'Python' },
  { value: 'JAVA', label: 'Java' },
  { value: 'CPP', label: 'C++' },
  { value: 'JAVASCRIPT', label: 'JavaScript' },
  { value: 'CSHARP', label: 'C#' },
  { value: 'RUBY', label: 'Ruby' },
  { value: 'GO', label: 'Go' },
  { value: 'SWIFT', label: 'Swift' },
];

export const mapCodingTestLanguageToLabel = (value: string) => {
  const language = codingTestLanguages.find((lang) => lang.value === value);
  if (!language) throw new Error(`코딩테스트 언어중에서 매칭되는 라벨이 없음: ${value}`);
  return language.label;
};

export const useCodingTestOptions = () => {
  return codingTestLanguages.map((language) => ({
    value: language.value,
    label: language.label,
  }));
};
