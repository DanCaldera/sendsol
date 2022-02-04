import React from 'react';
import cn from 'classnames';

const Input = (props) => {
  const { className, children, onChange, rows, ...rest } = props;

  const rootClassName = cn({}, className);

  const handleOnChange = (e: { target: { value: any } }) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <textarea
      className={rootClassName}
      onChange={handleOnChange}
      rows={rows}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      {...rest}
    />
  );
};

export default Input;
