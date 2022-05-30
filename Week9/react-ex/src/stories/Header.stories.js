import Header from '../components/Header';

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {
    level: {
      control: {
        type: 'range',
        min: 1,
        max: 6,
        step: 1,
      },
    },
    strong: { control: { type: 'boolean' } },
    underline: { control: { type: 'boolean' } },
  },
};

const Template = (args) => <Header {...args}>Header</Header>;

export const Default = Template.bind({});
