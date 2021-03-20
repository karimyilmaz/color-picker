import React, { useState } from 'react';
import styled from 'styled-components'
import {ColorBox} from './Components/ColorBox'
import Values from 'values.js'
import {validate_input} from './utils'

const Container = styled.div`
      display: flex;
      align-items: center;
      padding-left: 3rem;
      height: 100px;
      `

const Heading = styled.h1``
const Form = styled.form``

const Input = styled.input`
      padding: .7rem .6rem;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      font-size: 1rem;
      border: ${({valid}) => (valid? '1px solid #fff': '3px solid #FF0000')};
      margin-left: 40px;

      &:focus{
        outline-style: none;
      }
`

const Button = styled.button`
      padding: .7rem 1rem;
      background: #49A6E9;
      border: 1px solid #49A6E9;
      border-radius: 5px;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;

      &:focus{
        outline-style: none;
      }

`
const ContainerGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(7, 1fr);
  height: calc(100vh - 100px);

  @media(max-width: 897px){
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  `
const App = () => {
  const [color, setColor] = useState()
  const [colorScheme, setColorScheme] = useState([...new Values('#f15025').all(10)])
  const [valid , setValid] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(validate_input(color)){
      setValid(true)
      setColorScheme([...new Values(color).all(10)])  
    } 
    else{
      setValid(false)
    }
    
  }

  return (
    <React.Fragment>
      <Container>
        <Heading>Color Generator</Heading>

        <Form onSubmit={handleSubmit} autoComplete='off'>
          <Input type='text' valid={valid} name='color_picked' value={color} placeholder='#f15025' onChange={(event) => {setColor(event.target.value)}}/>
          <Button type='submit'>Submit</Button>
        </Form>

      </Container>

      <ContainerGrid>
        {colorScheme.map((object, index) => <ColorBox key={index} rgb={object.rgb} weight={object.weight} type={object.type}/>)}
      </ContainerGrid>

    </React.Fragment>
  );
}

export default App;
