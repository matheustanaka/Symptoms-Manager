import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    max-width: 1120px;
    margin: 0 auto ;
    padding: 2.5rem;
    background: var(--background);
`;