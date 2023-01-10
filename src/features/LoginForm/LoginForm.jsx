import styled from "styled-components";

import { useLoginForm } from "./loginFormHooks";

import PasswordInput from "../../components/PasswordInput";
import SubmitButton from "../../components/SubmitButton"
import TextInput from "../../components/TextInput";
import Title from "../../components/Title";

const LoginForm = () => {
    const [email, password, error, loading, {emailHandler, passwordHandler, login} ] = useLoginForm();

    return (
        <FormContainer>
            <Title text={"Login"}/>
            <TextInput label={"Email"} onChangeFn={(e) => emailHandler(e)}/>
            <PasswordInput label={"Password"} onChangeFn={(e) => passwordHandler(e)}/>
            <SubmitButton text={"Log In"} onClickFn={login}/>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    margin-top: 2em;
`
export default LoginForm
