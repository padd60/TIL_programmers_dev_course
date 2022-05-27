import Input from '../components/Input';

export default {
  title: 'Component/Input',
  component: Input,
  argsTypes: { onChange: { action: 'onChange' } },
};

export function Default(args) {
  return <Input {...args} />;
}
