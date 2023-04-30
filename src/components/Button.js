import styled from 'styled-components';

const Button = styled.button`
    background-color: palevioletred;
    color: #fff;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        background-color: #fff;
        color: palevioletred;
    }
    `

export default Button;
