import Header from '../components/Header';

export default {
  title: 'Component/Header',
  component: Header,
  argsTypes: {
    level: {
      control: {
        type: 'range',
        min: 1,
        max: 6,
        step: 1,
      },
    },
  },
};

const Template = (args) => <Header {...args}>Header</Header>;

export const Default = Template.bind({});
