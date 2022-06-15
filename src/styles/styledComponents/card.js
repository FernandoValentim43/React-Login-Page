import styled from "styled-components";
export const Card = styled.section`

& {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 5vh;
  height: 90vh;
  
  margin-left: auto;
  margin-right: auto;
  
  
  width: 583.5px;
  border-radius: 20px;
  background-color: #FFFFFF;
  }



  .img-section {
    display: flex;
    justify-content: center;
    padding-top: 50px;
  }

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 0px;
  }





  
  @media(max-width: 768px) {
    & { 
      width: 70vw;
    }

    .card-head {
      margin-bottom: 4vh;
    }

  }



`;
