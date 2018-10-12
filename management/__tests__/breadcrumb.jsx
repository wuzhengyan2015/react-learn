import React from 'react'
import renderer from 'react-test-renderer'
import BreadCrumb from '../src/components/BreadCrumb/index'
import Enzyme, {shallow, mountm, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const Item = BreadCrumb.item
Enzyme.configure({
  adapter: new Adapter(),
})

it('面包屑的渲染', () => {
  const tree = renderer
    .create(<BreadCrumb><Item>First</Item><Item>Second</Item></BreadCrumb>)
    .toJSON(); 
  expect(tree).toMatchSnapshot();
})

/* test('面包屑文字', () => {
  const breadcrumb = render(<BreadCrumb><Item>First</Item><Item>Second</Item></BreadCrumb>)
  expect(breadcrumb.find('div')).toEqual('First')
}) */
class CustomError extends Error {}
const binaryStringToNumber = binString => {
  if (!/^[01]+$/.test(binString)) {
    throw new CustomError('Not a binary number.');
  }

  return parseInt(binString, 2);
};

describe('binaryStringToNumber', () => {
  describe('given an invalid binary string', () => {
    test('composed of non-numbers throws CustomError', () => {
      expect(() => binaryStringToNumber('abc')).toThrow('Not a binary number.');
    });

    test('with extra whitespace throws CustomError', () => {
      expect(() => binaryStringToNumber('  100')).toThrow('Not a binary number.');
    });
  });

  describe('given a valid binary string', () => {
    test('returns the correct number', () => {
      expect(binaryStringToNumber('100')).toBe(4);
    });
  });
});

