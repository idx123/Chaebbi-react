import styled from "styled-components";
import React, { useState } from "react";
import Form from "../elements/Form";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Radio from "../elements/Radio";

const UserRegister =()=>{
    const [userinfo,setUserinfo] = useState({
        email: '',
        pwd: '',
        nickname: '',
        name: '',
        gender: '',
        age: '',
        height: '',
        weight: '',
        activity: ''
    });

    const gender = [
        {id: 1, name:"gender", value:0, label:"남자"},
        {id: 2, name:"gender", value:1, label:"여자"},
    ]
    const activity = [
        {id: 3, name:"activity", value:25, label:"1단계"},
        {id: 4, name:"activity", value:33, label:"2단계"},
        {id: 5, name:"activity", value:40, label:"3단계"},
    ]

    const handleInput =(e)=>{
        setUserinfo({...userinfo,[e.target.id]: e.target.value});
        console.log([e.target.id], e.target.value);
    }

    //유효성 검사
    const handleValid =()=>{
    
    }
    
    return(
        <Form width="50rem">
            <Title>회원가입</Title>
            <DuplContainer>
                <Input id="nickname" type="text" label="닉네임" placeholder="enter your nickname" _onChange={handleInput}/>
                <Button text="중복확인" _onClick={handleValid} position="relative" top="2rem"/>
            </DuplContainer>
            <DuplContainer>
                <Input id="email" type="email" label="이메일" placeholder="enter your email" _onChange={handleInput}/>
                <Button text="중복확인" _onClick={handleValid} position="relative" top="2rem"/>
            </DuplContainer>
            <Input id="pwd" type="password" label="비밀번호" placeholder="5자 이상 20자 미만" _onChange={handleInput}/>
            
            <Container>
                <Input id="name" type="text" label="이름" placeholder="홍길동" _onChange={handleInput}/>
                <Input id="age" type="number" label="나이" placeholder="20" _onChange={handleInput}/>
            </Container>
            <Container>
                <Input id="height" type="number" label="신장" placeholder="cm" _onChange={handleInput}/>
                <Input id="weight" type="number" label="체중" placeholder="kg" _onChange={handleInput}/>    
            </Container>
            <RadioContainer>
                <legend>성별</legend>
                <div className="radio-box">
                    {gender.map(g => (
                        <Radio
                            key={g.id} 
                            id={g.id}
                            name={g.name}
                            value={g.value}
                            label={g.label}
                            text={g.label}
                            onClick={handleInput}
                        />
                    ))}
                </div>
            </RadioContainer>
            <ActRadioContainer>
                <legend>활동점수</legend>
                <div className="radio-box">
                    {activity.map(g => (
                        <Radio
                            key={g.id} 
                            id={g.id}
                            name={g.name}
                            value={g.value}
                            label={g.label}
                            text={g.label}
                            onClick={handleInput}
                        />
                    ))}
                </div>
            </ActRadioContainer>
            <Button text="가입하기" href="/sign-in" width="100%"/>
        </Form>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 1rem;
`;

const Title = styled.div`
    font-size: 3rem;
    margin-bottom: 2.5rem;
`;

const DuplContainer = styled(Container)`
    grid-template-columns: 2fr 1fr;
`;

const RadioContainer = styled.div`
    font-size: 1.4rem;

    legend{
        position: relative;
        left: 0.4rem;
    }

    div.radio-box{
        display: flex;
        gap: 3rem;
        margin-top: 1rem;
        padding: 0 1rem;
    }
`;

const ActRadioContainer = styled(RadioContainer)`
    margin: 1.2rem 0 2.4rem 0;
`;

export default UserRegister;