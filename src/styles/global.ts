import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: rgba(243, 245, 247, 1);
        --box: rgba(255, 255, 255, 1);
        --background-color: #0093E9;
        --background-color2: #00a1ff;
        --background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    // font-size: 16px (desktop);
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }
    //REM = 1rem = font-size
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
   .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
   }
   .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
   }
   .react-modal-close {
       position: absolute;
       right: 1.5rem;
       top: 1.5rem;
       border: 0;
       
       background: var(--background-color2);
       color: #FFF;
       
       width: 6rem;
       height: 2rem;

        font-size: 1rem;
        font-weight: 600;

        border-radius: 0.25rem;
       transition: filter 0.2s;
       
       &:hover {
           filter: brightness(0.8);
       }
    }
`;