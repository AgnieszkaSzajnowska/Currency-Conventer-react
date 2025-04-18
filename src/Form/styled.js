import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
`;

export const Field = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 350px;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: blueviolet;
    color: white;
    padding: 10px;
    border-radius: 5px;
    transition: 0.3s;
    
    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Header = styled.h1`
    color: blueviolet;
    text-align: center;
`;

export const Loading = styled.p`
    color: blueviolet;
`;

export const Failure = styled.p`
    color: crimson;
`;