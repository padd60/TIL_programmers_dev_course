import styled from '@emotion/styled';
import useForm from '../hooks/useForm';
import Title from './Title';
import Input from './Input';
import ErrorText from './ErrorText';
import CardForm from './CardForm';
import Button from './Button';

function LoginForm({ onSubmit }: { onSubmit: () => void }) {
  const sleep = () => new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 1000);
  });

  type formType = { name: string; password: string };

  const {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  } = useForm({
    initValues: {
      name: '',
      password: '',
    },
    onSubmit,
    validate: ({
      name,
      password,
    }:formType) => {
      const newErrors = {} as formType;
      if (!name) newErrors.name = '이름을 입력해주세요.';
      if (!password) newErrors.password = '비밀번호를 입력해주세요.';
      return newErrors;
    },
  });

  console.log(values, errors);

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>Login</Title>
      <Input
        name="name"
        onChange={handleChange}
        placeholder="Name"
        type="text"
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Input
        name="password"
        onChange={handleChange}
        placeholder="Password"
        style={{ marginTop: 8 }}
        type="password"
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button
        disabled={isLoading}
        style={{ marginTop: 16 }}
        type="submit"
      >
        Login
      </Button>
    </CardForm>
  );
}

export default LoginForm;
