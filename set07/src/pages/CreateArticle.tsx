import React, { useState } from 'react'
import styled from 'styled-components'

const CreateArticle = () => {
    const {title, setTitle} = useState<string>("")
  return (
    <div>
        <center>
       <Input
       placeHolder = "EnterArticleTitle"
       value = {title}
       onChange = {(e: any) => {
        setTitle(e.target.title)
       }}
       />
        </center>
    </div>
  )
}

export default CreateArticle

const Input = styled.form``

const Container = styled.div``