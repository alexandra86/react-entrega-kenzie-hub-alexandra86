import styled from "styled-components";

export const StyledHomePage = styled.div`
    max-width: 100vw;
    width: 100%;
    height: 100vh;
    background-color: #121214;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;

    .headerHome{
        margin-top:1.8125rem;
        margin-bottom:1.773125rem;
        max-width: 90rem;
        width:60%;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

    .areaUser{
        margin-bottom:2.3125rem;
        max-width: 90rem;
        width:60%;
        height:7.375rem;
        display:flex;
        align-items: center;
        justify-content: space-between;

    }

    .areaInformation{
        max-width: 90rem;
        width:60%;
        height:7.375rem;
        display:flex;
        align-items: flex-start;
        flex-direction:column;
    }

    .areaWelcome{
        margin-top:2.8125rem; 
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size:1.125rem;
        color:#F8F9FA;  
    }

    .course{
        margin-top:2.8125rem;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size:0.75rem;
        color:#868E96;
    }
    
    .areaInformation{
        margin-top:2.3125rem;
        gap:1.4375rem;
    }


    .whatAShame{
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size:1.125rem;
        color:#F8F9FA;
    }

    .information{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size:1rem;
        color:#FFFFFF;

    }


    .btComeBackLogin{
        max-width:4.218125rem;
        width:100%;
        height:2.506875rem; 
        padding: 0rem 1rem;
        border-radius:0.25rem;
        border:0.07625rem solid #212529;
        background-color:#212529;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size:0.75rem;
        color:#F8F9FA;
    }

    .btComeBackLogin:hover{
        border:0.07625rem solid #343B41;
        background-color:#343B41;
    }
    tr{
        width:100%;
        height:0.03125rem;
        border: 0.03125rem outset  #212529;
        
    }

    @media(max-width:56.25rem){
        .areaUser{
            display:flex;
            align-items:center;
            width: 60%;
            
        }
    }

    @media(max-width:43.75rem){
        .headerHome{
            margin-top:1.8125rem;
            margin-bottom:1.773125rem;
            max-width: 90rem;
            width:80%;
            display:flex;
            align-items: center;
            justify-content: space-between;
        }
        .logoKenziHub{
            max-width:6.595625rem;
            width:100%;
            height:0.914375rem;
            
        }
        .areaUser{
            display:flex;
            align-items:flex-start;
            justify-content: flex-start;
            flex-direction:column;
            width: 80%;
            gap: 0.625rem;
        }

        .areaInformation{
            display:flex;
            align-items:flex-start;
            justify-content: flex-start;
            width: 80%;
            line-height: 1.75rem;
        }

    }


`
