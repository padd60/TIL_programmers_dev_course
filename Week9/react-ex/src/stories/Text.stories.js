import Text from '../components/Text';

export default {
  title: 'Component/Text',
  component: Text,
  argsTypes: {
    size: { control: 'number' },
    strong: { control: 'boolean' },
    underline: { control: 'boolean' },
    delete: { control: 'boolean' },
    color: { control: 'color' },
    block: { control: 'boolean' },
    paragraph: { control: 'boolean' },
    mark: { control: 'boolean' },
    code: { control: 'boolean' },
  },
};

export const Default = (args) => (
  <Text {...args}>Text</Text>
);

export const Size = (args) => (
  <>
    <Text {...args} size="large">Large</Text>
    <Text {...args} size="normal">Normal</Text>
    <Text {...args} size="small">Small</Text>
    <Text {...args} size={24}>Custom</Text>
  </>
);
