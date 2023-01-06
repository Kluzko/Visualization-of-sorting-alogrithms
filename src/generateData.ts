export default function generateData(numPoints: number): number[] {
  const data = new Set();
  while (data.size < numPoints) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber > 0) {
      data.add(randomNumber);
    }
  }
  return [...data] as number[];
}
