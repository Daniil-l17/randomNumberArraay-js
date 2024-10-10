

function generateRandomNumber(minNumber = 1, maxNumber = 100, amount = 1, isDouble = true, isSort = false, dontNumbers = []) {
  const result = []
  if (minNumber < 1) {
    throw new Error("минимальное значение должно быть больше 1")
  }
  if (maxNumber < dontNumbers.length) {
    throw new Error("повторения должны быть больше исключенных чисел")
  }
  function generateMathNumber() {
    const generate = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
    if (isDouble) {
      return generate
    }
    if (result.some((item) => item === generate) || dontNumbers.some((item) => item === generate)) {
      return generateMathNumber()
    }
    return generate
  }
  for (let i = 0; i < amount; i++) {
    if (maxNumber < amount) {
      throw new Error("максимальное значение должно быть меньше повторений")
    }
    result.push(generateMathNumber())
  }
  return isSort ? result.sort((a, b) => a - b) : result
}

// minNumber, maxNumber, amount, isDouble, isSort, dontNumbers
console.log(generateRandomNumber(1, 10, 2, false, true, [3, 6, 8, 2]));