import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 23.125rem;
  width: 60%;
  margin-top: 3.676875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logoKenziHub {
    max-width: 9.00375rem;
    width: 100%;
    max-height: 1.248125rem;
  }

  .btComeBackLogin {
    max-width: 4.218125rem;
    width: 100%;
    height: 2.506875rem;
    padding: 0rem 1rem;
    border-radius: 0.25rem;
    border: 0.07625rem solid #212529;
    background-color: #212529;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    color: #f8f9fa;
  }

  .btComeBackLogin:hover {
    border: 0.07625rem solid #343b41;
    background-color: #343b41;
  }

  @media (max-width: 43.75rem) {
    width: 80%;
  }
`;
