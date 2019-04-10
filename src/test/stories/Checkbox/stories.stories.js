import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '.';

storiesOf('Checkbox', module)
  .add('with checked', () => {
    const value = true;
    const children = 'My Checkbox Label';
    const onCheckboxChange = () => { };

    return (
      <Checkbox value={value} onCheckboxChange={onCheckboxChange}>
        {children}
      </Checkbox>
    );
  })
  .add('with unchecked', () => {
    const value = false;
    const children = 'My Checkbox Label';
    const onCheckboxChange = () => { };

    return (
      <Checkbox value={value} onCheckboxChange={onCheckboxChange}>
        {children}
      </Checkbox>
    );
  });