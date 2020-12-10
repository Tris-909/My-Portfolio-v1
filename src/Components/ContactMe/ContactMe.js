import React, {useState} from 'react'
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactFormContainer = styled.div`
    width: 80%;
    height: 600px;
    border-radius: 15px;
    margin: 0% 10% 5% 10%;
    background-color: #f7faff;

    @media (max-width: 560px) {
        width: 90%;
        margin: 0% 5% 5% 5%;
        border-radius: 0px;
    }
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

    @media (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        margin-top: 3%;
    }
`;

const SubTitle = styled.div`
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 40px;
    margin-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 800px) {
        display: none;    
    }
`;

const InputContainer = styled.form`
    width: 100%;
`;

const Input = styled.input`
    width: 90%;
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
        color: white;
        margin-top: 5px;
        display: none;

        @media (max-width: 800px) {
            display: initial;    
        }
    }

    &:focus {
        outline: none;
    }
`;

const InputTextArea = styled.textarea`
    width: 90%;
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
        color: white;
        display: none;

        @media (max-width: 800px) {
            display: initial;    
        }
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
    width: 19%;
    height: 60px;
    padding: 10px;
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

    @media (max-width: 560px) {
        width: 30%;   
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
                    <SubTitleContainer> <SubTitle>Name : </SubTitle><Input name="name" value={name} onChange={HandlerNameChange} placeholder="Your Name" /> </SubTitleContainer>
                    <SubTitleContainer> <SubTitle>Gmail :</SubTitle> <Input name="email" value={email} onChange={HandlerEmailChange} placeholder="Your Gmail" /> </SubTitleContainer>
                    <SubTitleContainer> <SubTitle>Messages :</SubTitle> <InputTextArea name="message" rows="15" value={message} onChange={HandlerMessageChange} placeholder="What's on your mind ?" /> </SubTitleContainer>
                    <ButtonContainer>
                        <Button onClick={sendMessage}>Submit</Button>
                    </ButtonContainer>
                </InputContainer>
            </MarginContainer>
        </ContactFormContainer>
    )
}
