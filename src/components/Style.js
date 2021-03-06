import styled from 'styled-components';

export const TheForm = styled.form`
margin-top: 20px;
width: 800px;
margin-left: auto;
margin-right: auto;
`;

export const FormGroup = styled.div`
  background-color: rgb(180, 179, 179);
  border-radius: 10px;
  width: 450px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Label = styled.label`
  display: inline-block;
  width: 160px;
  text-align: left;
  color: white;
  padding-left: 40px;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 230px;
  border: none;
  height: 30px;
  color: rgb(179, 34, 236);
  font-weight: 600;
  border-radius: 0px 5px 5px 0px;
`;

export const Navbar = styled.div`
  background: rgb(179, 34, 236);
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: flex-end;
  color: white;
  fontWeight: 600;
`;