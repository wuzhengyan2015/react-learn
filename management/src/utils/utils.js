export const getType = obj => Object.prototype.toString.call(obj).slice(8, -1)

export const findParent = (el, className) => {
  let parent = el.parentNode
  while (parent && parent.className.indexOf(className) === -1) {
    parent = parent.parentNode
  }
  return parent
}
