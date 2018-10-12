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

describe.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
  '.add(%i, %i)',
  (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(a + b).toBe(expected);
    });

    test(`returned value not be greater than ${expected}`, () => {
      expect(a + b).not.toBeGreaterThan(expected);
    });

    test(`returned value not be less than ${expected}`, () => {
      expect(a + b).not.toBeLessThan(expected);
    });
  },
);