import React, { useContext } from 'react';
import FormContext from '../context/FormContext';
import { TheForm, FormGroup, Label, Input } from './Style';

const Form = () => {
  const { name, setName } = useContext(FormContext);

  return (
    <TheForm>
      <FormGroup>
        <Label>Your Name: {" "}</Label>
        <Input value = { name } onChange = {e => setName(e.target.value)}/>
      </FormGroup>
    </TheForm>
  )
}

export default Form;