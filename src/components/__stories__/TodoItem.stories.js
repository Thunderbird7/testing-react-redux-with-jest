import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'
import TodoItem from '../TodoItem'

storiesOf('TodoItem', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .addWithInfo('not complete', 'An complete todo item', () => (
    <TodoItem text={text('text', 'not complete')} />
  ))
  // .add('not complete', () => (
  //   <TodoItem text={text('Text', 'Not Complete')} />
  // ))
  .add('complete', () => (
    <TodoItem
      text={text('Text', 'Complete')}
      complete={boolean('Complete', true)} />
  ))