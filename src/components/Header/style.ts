import styled from "styled-components";

export const Container = styled.header`
    background: var(--background-color);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 5rem;
    display: flex;
    justify-content: center;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-top: 1rem;
        color: #FFF;
    }
`;