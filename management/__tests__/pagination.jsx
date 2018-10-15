import React from 'react'
import Pagination from '../src/components/Pagination/Pagination'
import Enzyme, {shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter(),
})

describe('Pagination rendering', () => {
  it('should pass total', () => {
    const pagination = <Pagination total={10}/>
    expect(pagination.props.total).toBe(10)
  })
  it('should have default props', () => {
    const pagination = <Pagination total={10}/>
    expect(pagination.props.pageSize).toBe(8)
    expect(typeof pagination.props.onChange).toBe('function')
  })
  it('when pageBtn was click, onChange() should be callback', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Pagination total={20} onChange={onChange} />)
    wrapper.find('.ui-pagination-item').at(2).simulate('click')
    expect(onChange).toBeCalled()
  })
  it('when current btn was click, onChange should not be call', () => {
    const onChange = jest.fn()
    const wrapper = mount(<Pagination total={20} onChange={onChange} />)
    wrapper.find('.ui-pagination-item').at(0).simulate('click')
    expect(onChange).not.toBeCalled()
  })
})