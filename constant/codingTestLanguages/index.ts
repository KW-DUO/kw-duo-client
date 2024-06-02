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

export const useCodingTestOptions = () => {
  return codingTestLanguages.map((language) => ({
    value: language.value,
    label: language.label,
  }));
};
