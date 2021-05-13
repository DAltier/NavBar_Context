import React, { useState } from 'react';
import FormContext from '../context/FormContext';

const Wrapper = ({ children }) => {
  const [name, setName] = useState("Bob Smith");

  return (
    <FormContext.Provider value = {{ name, setName }}>
      { children }
    </FormContext.Provider>
  )
}

export default Wrapper;