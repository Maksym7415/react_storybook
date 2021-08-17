import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginPage from './/LoginPage';

export default {
  title: 'Example/LoginPage',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />;

export const SignIn = Template.bind({});


