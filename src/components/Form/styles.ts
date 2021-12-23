import styled from "styled-components";


export const Container = styled.div`
  margin-top: 10rem;
  display: grid;
  place-items: center;
  h2{
    text-align: center;
    margin-bottom: 2rem;
  }
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    input, textarea{
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      background:none;
      border: 1px solid #FFF;
      color: white;
      &::placeholder{
        color: #FFF;
      }
    }

    textarea{
      height: 20rem;
      overflow-y: auto;
    }

    button{
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  
  }

  @media (max-width: 740px){
    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
      }
    }
  }
`