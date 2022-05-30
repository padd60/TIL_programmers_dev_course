import {
  useState, ChangeEvent, FormEvent,
} from 'react';

type props = {
  initValues: { name: string; password: string; passwordConfirm?:string},
  onSubmit : ()=>void,
  validate : (value:{ name: string; password: string; passwordConfirm?:string }) => { name: string; password: string; passwordConfirm?:string },
}

const useForm = ({
  initValues,
  onSubmit,
  validate,
}:props) => {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({} as { name: string; password: string; passwordConfirm?:string });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
    } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length === 0) {
      await onSubmit();
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
