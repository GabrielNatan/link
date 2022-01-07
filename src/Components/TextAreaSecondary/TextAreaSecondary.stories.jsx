import React from 'react';

import { TextAreaSecondary } from './index';

export default {
  title: 'Inputs/TextAreaSecondary',
  component: TextAreaSecondary,
  argTypes: {
    state: {
      options: ['failure', 'success', ''],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => <TextAreaSecondary {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Text Area Secondary',
    placeholder: "Text Area Secondary",
    state: 'failure'
};
