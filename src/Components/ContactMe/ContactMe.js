import React, {useState} from 'react'
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactFormContainer = styled.div`
    width: 80%;
    height: 600px;
    border-radius: 15px;
    margin: 0% 10% 0% 10%;
    background-color: #f7faff;
`;

const MarginContainer = styled.div`
    width: 90%;
    height: 90%;
    position: relative;
    top: 5%;
    left: 5%;

    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    width: 100%;
    text-align: center;
    font-size: 56px;
    margin-bottom: 10px;
`;

const SubTitleContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 1fr;
`;

const SubTitle = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 40px;
    margin-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const InputContainer = styled.div`
    width: 100%;
`;

const Input = styled.input`
    width:70%;
    height: 40px;
    margin-left: 20px;
    display: inline-block;
    border: none;
    text-indent: 20px;
    background-color: #30302e;
    color: white;

    &::placeholder {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 20px;
        margin-top: 5px;
    }

    &:focus {
        outline: none;
    }
`;

const InputTextArea = styled.textarea`
    width:70%;
    margin-left: 20px;
    display: inline-block;
    border: none;
    text-indent: 20px;
    background-color: #30302e;
    color: white;
    resize: none;

    &::placeholder {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 20px;
        margin-top: 5px;
    }

    &:focus {
        outline: none;
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    width: 15%;
    height: 40px;
    margin-top: 10px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 25px;
    font-weight: 700;
    transition: all 0.3s;
    border: none;
    background: #30302e;
    color:  #fff;

    &:hover {
        box-shadow: 0 0.5em 0.5em -0.4em;
        transform: translateY(-0.25em);
    }
`;

export default function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const HandlerNameChange = (event) => {
        setName(event.target.value);
    }

    const HandlerEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const HandlerMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = (event) => {
        event.preventDefault();

        const templateParams = {
            from_name: name + " (" + email + ")",
            to_name: 'Tran Minh Tri',
            message_html: message
        };
        
        emailjs.send('gmail', 'template_KSxjiZig', templateParams, 'user_pYBPiABaQA2DtYNdzP8gL')
        .then((result) => {
            console.log(result.text);
            setEmail('');
            setName('');
            setMessage('');
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <ContactFormContainer id="Contact">
            <MarginContainer>
                <Title>Contact Me</Title>
                <InputContainer>
                    <SubTitleContainer> <SubTitle>Name : </SubTitle><Input value={name} onChange={HandlerNameChange} /> </SubTitleContainer>
                    <SubTitleContainer> <SubTitle>Gmail :</SubTitle> <Input value={email} onChange={HandlerEmailChange} /> </SubTitleContainer>
                    <SubTitleContainer> <SubTitle>Messages :</SubTitle> <InputTextArea rows="15" value={message} onChange={HandlerMessageChange} /> </SubTitleContainer>
                    <ButtonContainer>
                        <Button onClick={sendMessage}>Submit</Button>
                    </ButtonContainer>
                </InputContainer>
            </MarginContainer>
        </ContactFormContainer>
    )
}
