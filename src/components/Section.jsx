import React from 'react'
import styled from "styled-components";
const Section = ({title, description,backgroundImg,leftBtnText,rightBtnText}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      {/* Text */}
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
      {/* Buttons and Down arrow buttons */}
      <Buttons>
        {/* Buttons */}
          <ButtonGroup>

            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {rightBtnText && (
              <RightButton>
                {rightBtnText}
              </RightButton>

            )}

          </ButtonGroup>
        {/* Down Arrow */}
        <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap =  styled.div`
  width: 100vw;
  height: 100vh;
  background:orange;
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;
  background-image:${props => `url('images/${props.bgImage}')`};
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;

@media (max-width: 768px){
  flex-direction:column;
}

`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32,0.8);
  height: 40px;
  width: 256px;
  color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius:100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin:8px;
`
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
`

const Buttons = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`