export const getRandomGender = () => {
  const randomNum = Math.floor(Math.random() * Math.floor(2))
  return randomNum === 1 ? 'male' : 'female'
}