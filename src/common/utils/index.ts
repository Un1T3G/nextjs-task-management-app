export const getElementCoordinate = (element: HTMLElement) => {
  const box = element.getBoundingClientRect()

  return {
    top: box.top,
    right: box.right,
    bottom: box.bottom,
    left: box.left,
  }
}

export const generateUniqueId = (prefix: string = '') => {
  const value = Math.random()
  const id = value.toString(16).substring(2)
  return prefix ? `${prefix}_${id}` : id
}

export const removeItemFromArray = <T>(array: T[], index: number) => {
  array = array.filter((_, i) => i !== index)
  return array
}

export const bool2string = (value: boolean) => {
  return value ? 'true' : 'false'
}

export const string2bool = (value: 'true' | 'false') => {
  return value === 'true' ? true : false
}
