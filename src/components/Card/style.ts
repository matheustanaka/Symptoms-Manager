import styled from "styled-components";
export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    
    margin-top: 2rem;


    .box-card {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        background: var(--box);
        border-radius: 1rem;

    }

`;