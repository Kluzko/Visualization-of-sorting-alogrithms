const generateData = (numPoints: number): number[] => {
  const data: number[] = [...Array(numPoints).keys()];
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};

export default generateData;
