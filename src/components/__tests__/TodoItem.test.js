import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

// Describe 
describe('TodoItem', () => {

  // Test scenario

  it('matches its snapshot - is complete', () => {
    const component = shallow(<TodoItem text="Complete" complete />)
    expect(component).toMatchSnapshot()
  })

  it('matches its snapshot - not complete', () => {
    const component = shallow(<TodoItem text="Not Complete" />)
    expect(component).toMatchSnapshot()
  })

  it('renders correct structure', () => {
    const component = shallow(<TodoItem text="Hello" />)
    expect(component.is('li')).toBe(true)
    expect(component.text()).toBe('Hello')
  })

  it('has complete class if receive complete props', () => {
    const component = shallow(<TodoItem text="Hello" complete />)
    expect(component.hasClass('complete')).toBe(true)
  })


})