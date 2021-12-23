import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
  }
  
  

  .about-image{
    text-align: center;
   img{
     width: 100%;
     filter: grayscale(1);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    .about-image{
      display: none;
    }
    .hard-skills{
      justify-content: center;
    }
    
  }

`