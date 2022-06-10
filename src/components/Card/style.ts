import styled from "styled-components";
export const Container = styled.div`
    padding: 5px;

    .card-box {
        padding: 1.5rem;
        background: var(--box);
        border-radius: 1rem;
        
        .icons {
            display: flex;
            justify-content: flex-end;
            cursor: pointer;
        }

        .user-info {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    }

`;