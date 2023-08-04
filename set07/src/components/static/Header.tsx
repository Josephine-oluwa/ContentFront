import React from 'react'
import styled from "styled-components"

const Header = () => {
  return (
    <div>
        <Container>
            <Main>
            <Logo>Logo</Logo>
            <Button> create Article </Button>
            </Main>
        </Container>
        
    </div>
  )
}

export default Header

const Button = styled.div`

padding: 12px 25px;
border-radius: 30px;
color: white;
background-color: black;
font-weight: 600;
font-size: 20px;
`

const Logo = styled.div`
font-weight: bold;
font-size: 40px`

const Main = styled.div`
height: 100%;
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: yellow;


`

const Container = styled.div`
width: 100%;
height: 100px;
background-color: pink;
justify-content: center;
align-items: center;
display: flex;
`