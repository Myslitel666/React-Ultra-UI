import React from 'react';

type TextFieldProps = {
  name?: string;
};

const TextField: React.FC<TextFieldProps> = ({ name = "World" }) => {
  return (
    <input placeholder = 'G' value = "Hello, {name}!"/>
  );
};

export default TextField;