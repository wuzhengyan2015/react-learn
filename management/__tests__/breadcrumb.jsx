import React from 'react'
import renderer from 'react-test-renderer'
import BreadCrumb from '../src/components/BreadCrumb/index'
import Enzyme, {shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const Item = BreadCrumb.item
Enzyme.configure({
  adapter: new Adapter(),
})

describe('<BreadCrumb />', () => {
  it('面包屑的渲染', () => {
    const tree = renderer
      .create(<BreadCrumb><Item>First</Item><Item>Second</Item></BreadCrumb>)
      .toJSON(); 
    expect(tree).toMatchSnapshot();
  })
  
  test('面包屑子元素个数为2', () => {
    const breadcrumb = shallow(<BreadCrumb><Item>First</Item><Item>Second</Item></BreadCrumb>)
    expect(breadcrumb.children().length).toBe(2)
  })

  test('面包屑第一个元素文字为First', () => {
    const breadcrumb = mount(<BreadCrumb><Item>First</Item><Item>Second</Item></BreadCrumb>)
    expect(breadcrumb.find('.ui-breadcrumb-item').at(0).text()).toBe('First')
  })
})
