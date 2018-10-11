import { getType } from '../src/utils/utils'

function add(a, b) {
  return a + b
}

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})

describe('judgeType', () => {
  it('should be String', () => {
    expect(getType('s')).toBe('String')
  })
  it('should be Array', () => {
    expect(getType([])).toBe('Array')
  })
  it('should be Map', () => {
    expect(getType(new Map)).toBe('Map')
  })
})
