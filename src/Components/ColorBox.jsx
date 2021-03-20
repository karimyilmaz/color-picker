import React, { useState, createRef } from 'react'
import styled, {keyframes} from 'styled-components'
import {rgb_to_hex} from '../utils'

const animate_text = keyframes`
    from {
        font-size: .8rem;
    }
    to {
        font-size: .75rem;
    }
`

const Container = styled.div`
    background: ${({colour}) => (colour)};
    padding-left: 1rem;
    cursor: pointer;
`
const Heading = styled.h3`
    color: ${({type}) => (type === 'shade'? 'white': 'black')};
`
const SemiHeading = styled.h6`
    color: ${({type}) => (type === 'shade'? 'white': 'black')};
    animation: ${animate_text} 1s ease-in-out;
    font-size: .75rem;
`
const TextArea = styled.textarea` opacity:0; cursor: pointer;`

export const ColorBox = ({rgb, weight, type}) => {
    const [copied, setCopied] = useState(false)
    const textArea = createRef()

    const handleClick = () => {
        setCopied(true)
        textArea.current.select()
        document.execCommand('copy')
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <Container colour={rgb_to_hex(rgb)} onClick={handleClick}>
            <Heading type={type}>{weight}%<br></br>{rgb_to_hex(rgb)}</Heading>
            {copied && <SemiHeading type={type}>COPIED TO CLIPBOARD</SemiHeading>}
            <TextArea ref={textArea} value={rgb_to_hex(rgb)}></TextArea>
        </Container>
            
    )
}

