import styled from "styled-components";

export const StyledLoginPage = styled.div`
    max-width: 100vw;
    width: 100%;
    height: 100vh;
    background-color: #121214;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap:1.5625rem;
    
    .logoKenziHub{
     max-width:9.00375rem;
     width:100%;
     max-height:1.248125rem; 
    }

    .areaLogin{
     max-width: 23.0625rem;
     width:60%;
     padding:2.625rem 1.375rem;
     height:31.375rem;  
     display:flex;
     flex-direction:column;
     align-items: center;
     justify-content: flex-start;
     gap:1.375rem;
     border-radius: 0.25rem;
     background-color:#212529;
    }

    .titleLogin{
     margin-top:1.375rem;
     font-family: 'Inter', sans-serif;
     font-weight: 700;
     font-size:1.125rem;
     color:#F8F9FA;
    }

    .formLogin{
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


    .btOpen{
     max-width:20.25rem;
     width:100%;
     height:3rem; 
     padding: 0rem 1.375rem;
     border-radius:0.25rem;
     border:0.07625rem solid #FF577F;
     background-color:#FF577F;
     font-family: 'Inter', sans-serif;
     font-weight: 500;
     font-size:1rem;
     color:#FFFFFF;
    }

    .btOpen:hover{
     border:0.07625rem solid #FF427F;
     background-color:#FF427F;
    }

    .messageLogin{
     text-align:center;
     font-family: 'Inter', sans-serif;
     font-weight: 600;
     font-size:0.75rem;
     color:#868E96;
    }

    .btGoRegister{
     max-width:20.25rem;
     width:100%;
     height:3rem; 
     padding: 0rem 1.375rem;
     border-radius:0.25rem;
     border:0.07625rem solid #868E96;
     background-color:#868E96;
     font-family: 'Inter', sans-serif;
     font-weight: 500;
     font-size:1rem;
     color:#F8F9FA;
    }
    .btGoRegister:hover{
     border:0.07625rem solid #343B41;
     background-color:#343B41;
    }

    .areaError{
      color:red;
      font-family: 'Inter', sans-serif;
     font-weight: 500;
     font-size:0.75rem;
     margin-bottom: 0.5rem;
    }

`
