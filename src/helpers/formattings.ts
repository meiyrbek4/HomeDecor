export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const paragraphSlicer = (text: string, sliceNum: number) => {
  let i = sliceNum;
  for (let j = sliceNum; j < text.length; j++) {
    if (text[j] !== ' ') {
      i++;
    } else {
      break;
    }
  }
  return text.slice(0, i);
};
