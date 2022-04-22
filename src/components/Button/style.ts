import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5rem;
`;

export const Button = styled.button`
    font-size: 1.5rem;
    font-weight: 600;
    color: #FFF;
    background: var(--background-color2);

    border:0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 5rem;

    transition: filter 0.2s;
    
    &:hover {
        filter: brightness(0.9); //escurece o botão quando passa o mouse
        }
    
`;