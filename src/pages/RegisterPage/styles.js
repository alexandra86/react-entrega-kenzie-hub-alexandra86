import styled from "styled-components";

export const StyledRegisterPage = styled.div`
    max-width: 100vw;
    width: 100%;
    min-height: 100vh;
    background-color: #121214;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap:1.5625rem;

    .areaRegister{
     max-width: 23.125rem;
     width:60%;
     padding:2.625rem 1.375rem; 
     display:flex;
     flex-direction:column;
     align-items: center;
     justify-content: flex-start;
     gap:1.375rem;
     border-radius: 0.25rem;
     background-color:#212529;
    }

    .titleRegister{
     margin-top:1.375rem;
     font-family: 'Inter', sans-serif;
     font-weight: 700;
     font-size:1.125rem;
     color:#F8F9FA;
    }

    .messageRegister{
     text-align:center;
     font-family: 'Inter', sans-serif;
     font-weight: 400;
     font-size:0.75rem;
     color:#868E96;
    }

    .formRegister{
     display:flex;
     flex-direction:column;
     justify-content
     max-width:20.25rem;
     width:100%;
    }

    .areaLabel{
     font-family: 'Inter', sans-serif;
     font-weight: 400;
     font-size:0.76125rem;
     color:#F8F9FA;
     margin-bottom:1.125rem;
    }

    .areaInput{
     max-width:20.25rem;
     width:100%;
     height:3rem;
     margin-bottom:1.125rem;
     padding: 0rem 1.25rem;
     border-radius:0.25rem;
     border:0.07625rem solid #F8F9FA;
     outline:none;
     background-color:#121214;
     font-family: 'Inter', sans-serif;
     font-weight: 400;
     font-size:0.76125rem;
     color:#F8F9FA;
    }

    .areaInput::placeholder{
     max-width:19.4375rem;
     width:80%;
     font-family: 'Inter', sans-serif;
     font-weight: 400;
     font-size:0.76125rem;
     color:#F8F9FA;
    }
    .areaInput:focus{
      background-color:#343B41;
    }

    .btRegister{
     max-width:20.25rem;
     width:100%;
     height:3rem; 
     padding: 0rem 1.375rem;
     border-radius:0.25rem;
     border:0.07625rem solid #59323F;
     background-color:#59323F;
     font-family: 'Inter', sans-serif;
     font-weight: 500;
     font-size:1rem;
     color:#FFFFFF;
    }

    .btRegister:hover{
     border:0.07625rem solid #FF427F;
     background-color:#FF427F;
    }
 
    .areaError{
     color:red;
     font-family: 'Inter', sans-serif;
     font-weight: 500;
     font-size:0.75rem;
     margin-bottom: 0.5rem;
    }
    @media(max-width:43.75rem){
      .logoKenziHub{
        max-width:6.595625rem;
        width:100%;
        height:0.914375rem;
            
    }
    .areaRegister{
        width:80%;
    }

  }
`
