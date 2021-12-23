import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  
  background-color: #21212150;
  
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  
  

  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    a{
      color: #FFFF;
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button{
        padding: 0.6rem 5rem;
      }

      &:hover{
        filter: brightness(0.6);
      }
    }

  }
  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0 ;
  }

  .menu{
    width: 2rem;
    height: 0.2rem;
    background: #FFFF;
    position: relative;
    cursor: pointer;
    display: none;
    &:before{
      bottom: 0.5rem;
    }
    &:after{
      top: 0.5rem;
    }


    &.active:before{
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after{
      top: 0;
      transform: rotate(135deg);
    }

    &.active{
      background-color: rgba(0, 0, 0, 0);
    }

  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #FFFF;
    cursor: pointer;
    transition: .6s;
  }


  @media (max-width: 960px){
    .menu{
      display: block;
    }
    nav{
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      transition: opacity 0.25s;

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }

    
    
  }

  
`