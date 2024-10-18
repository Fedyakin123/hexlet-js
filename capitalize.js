const capitalize = (str) => {
  if (str === '') return '';
  const firstChar = str[0].toUpperCase();
  const restChars = str.slice(1);
  return `${firstChar}${restChars}`;
}

export default capitalize;