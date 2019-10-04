export const isFindFn = (objPart, value) => {
  let isFindx = false

  if (typeof (objPart) === 'object') {

    for (let key in objPart) {
      isFindx = isFindFn(objPart[key], value)
    }
  }

  if (typeof (objPart) === 'string') {
    if (objPart.toLowerCase().indexOf(value) !== -1) {
      isFindx = true
    }
  }

  if (typeof (objPart) === 'number') {
    if (objPart.toString().indexOf(value) !== -1) {
      isFindx = true
    }
  }
  return isFindx
}

export const filterData = (e, obj) => {
  const val = e.target.value.toLowerCase()

 let result = obj.filter( item => {
    let isFind = false

    for( let key in item){
      if (isFindFn(item[key], val) ){
        isFind = true
      }
    }
    return isFind
  })

  return result
}