import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  width: 350px;
`

export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`
export const InputContainer = styled.div`
  margin-top: 15px;
  width: 100%;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  height: 30px;
  width: 100%;
  margin-top: 20px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`

export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`
export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  outline: none;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
  padding: 8px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  margin: 12px;
  align-items: center;
`
export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
