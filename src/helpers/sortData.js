export const sortString = (arr, field, desc) => {
  let newArray = []

  if (!desc) {
    newArray = arr.sort((a, b) => {
      if (a[field] > b[field]) return 1
      if (a[field] < b[field]) return -1
      return 0
    })
  } else {
    newArray = arr.sort((a, b) => {
      if (a[field] < b[field]) return 1
      if (a[field] > b[field]) return -1

      return 0
    })
  }

  return newArray
}

export const sortNumber = (arr, field, desc) => {
  let newArray = []

  if (!desc) {
    newArray = arr.sort((a, b) => {
      return parseInt(a[field]) - parseInt(b[field])
    })
  } else {
    newArray = arr.sort((a, b) => {
      return parseInt(b[field]) - parseInt(a[field])
    })
  }
  return newArray
}

export const compareString = (a, b) => {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

export const compareNumbers = (a, b) => {
  return a - b
}