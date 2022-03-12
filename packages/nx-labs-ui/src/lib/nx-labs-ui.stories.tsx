import { Story, Meta } from '@storybook/react';
import { NxLabsUi, NxLabsUiProps } from './nx-labs-ui';

export default {
  component: NxLabsUi,
  title: 'NxLabsUi',
} as Meta;

const Template: Story<NxLabsUiProps> = (args) => <NxLabsUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
