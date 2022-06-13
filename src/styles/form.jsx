import styled from "styled-components";
export const Form = styled.section`
  .input-conainter {
    margin: auto;
    width: 480px;
    margin-top: 0px;
    margin-bottom: 5px;
  }

  input {
    height: 30px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 2.3px solid #aaaaaa;
    text-indent: 9px;
    font-size: 1rem;
  }

  input textarea {
    color: #aaaaaa;
  }

  p {
    margin-left: 2px;
    margin-bottom: 4px;
    color: #838282;
  }

  .error {
    color: #FF4B4B;
    margin-top: 3px;
    margin-bottom: 0px;
    font-size: 0.9rem;

    visibility: hidden;
  }
`;
