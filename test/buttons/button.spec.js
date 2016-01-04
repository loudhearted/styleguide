import { expect } from 'chai';
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import Button from 'buttons/button';
import Sinon from 'sinon';

describe('Button', () => {
  let callback = Sinon.spy();

  let props = {
    type: null,
    label: 'test',
    size: 'sm',
    disabled: false,
    link: true,
    extraClasses: ['extraclass-1', 'extraclass-2'],
    icon: 'pencil'
  }

  let component;
  let button;
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <Button {...props} />
    );
    button = React.findDOMNode(component);
  })

  it('applies extraClasses to the rendered component', () => {
    let classes = button.getAttribute('class');
    expect(classes).to.contain('extraclass-1');
    expect(classes).to.contain('extraclass-2');
  });

  it('applies the button-link class if true in props', () => {
    let options = TestUtils.scryRenderedDOMComponentsWithClass(component, 'button-link')
    expect(options.length).to.equal(1)
  });

  it('can render a component with an icon', () => {
    TestUtils.findRenderedDOMComponentWithClass(component, 'icon-pencil');
  });

});
