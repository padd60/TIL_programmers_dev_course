import Button from '../components/Button';

export default {
  title: 'Component/Button',
  component: Button,
  argsTypes: { onClick: { action: 'onClick' } },
};

export function Default(args) {
  return <Button {...args}>Button</Button>;
}
