export const useCount = () => {
  return useState('count', () => 0)
}
