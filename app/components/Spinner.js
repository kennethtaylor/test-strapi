import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`;

const Spinner = styled.div`
    border: 2px solid var(--slate);
    border-top: 2px solid var(--blue);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

function CustomSpinner() {
    return (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    );
}

export default CustomSpinner;
