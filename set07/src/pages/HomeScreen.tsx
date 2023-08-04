import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const HomeScreen = () => {
  return (
    <div>
        <Container>
            <Main>
                <Box>
                    <Title>Title</Title>
                    <Description> Description</Description>
                    <Category></Category>
                    <Image></Image>
                </Box>
            </Main>
        </Container>
    </div>
  )
}

export default HomeScreen



const Image = styled.div``

const Category = styled.div``

const Description = styled.div``

const Title = styled.div``


const Box = styled.div`
width: 450px;
min-height: 150px;

`

const Main = styled.div``

const Container = styled.div``