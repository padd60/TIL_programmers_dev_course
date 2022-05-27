import React, { ChangeEvent } from 'react';

type props = {
  label: string,
  checked: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
};

const CheckBox = React.memo(({
  label,
  checked,
  onChange,
}:props) => {
  console.log(label, checked);

  return (
    <label>
      {label}
      <input defaultChecked={checked} onChange={onChange} type="checkbox" />
    </label>
  );
});

CheckBox.displayName = 'CheckBox';

export default CheckBox;
