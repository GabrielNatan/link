import React from 'react';

import InputSecondary from './index';

export default {
  title: 'Inputs/InputSecondary',
  component: InputSecondary,
  argTypes: {
    state: {
      options: ['failure', 'success', ''],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => <InputSecondary {...args} />;

export const Default = Template.bind({});
Default.args = {
    state: 'failure',
    topLabel: 'Input Secondary',
    bottomLabel: 'Input Secondary',
    placeholder: 'Input Secondary'
};
