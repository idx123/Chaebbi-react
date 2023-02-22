import styled from "styled-components";
import React, { useState } from "react";
import Form from "../elements/Form";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { Link } from "react-router-dom";

const UserLogin =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail =(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value);
    }

    return(
        <Form width="33rem">
            <Logo>Chaebbi</Logo>
            <Input id="email" type="email" label="이메일" placeholder="enter email" _onChange={handleEmail}/>
            <Input id="pwd" type="password" label="비밀번호" placeholder="***" _onChange={handlePassword}/>
            <Section>
                <span>아직 회원이 아니신가요?</span>
                <Link to="/sign-up">회원가입</Link>
            </Section>
            <Button text="로그인" width="100%" href="/"/>
            <Button text="카카오계정으로 로그인" width="100%" margin="1rem 0 0 0"/>
        </Form>
    )
}
const Logo = styled.div`
    text-align: center;
    font-size: 3.2rem;
    font-weight: 600;
    margin: 2.4rem;
`;

const Section = styled.div`
    margin: 2rem 0;
    text-align: center;
    font-size: 1.4rem;
`;

export default UserLogin;