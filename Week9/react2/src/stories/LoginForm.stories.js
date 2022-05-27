import LoginForm from '../components/LoginForm';

export default {
  title: 'Component/LoginForm',
  component: LoginForm,
  argsTypes: { onSubmit: { action: 'onSubmit' } },
};

export function Default(args) {
  return <LoginForm {...args} />;
}
