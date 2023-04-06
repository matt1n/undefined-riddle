import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaseContainer,Answer,FaseImage,Text,Title } from "../../assets/styles/faseStyle";
import styled from "styled-components";
import { LightContext } from "../../contexts/LightContext";
import { Helmet } from "react-helmet";

export default function Fase3Page() {
  const {light, setLight} = useContext(LightContext)
  const navigate = useNavigate()
  return (
    <>
    <Helmet>
      <title >Não gosto desse nome</title>
    </Helmet>
    <FaseContainer light={light}>
      <Title light={light}>#3</Title>
      <Fase3Img
        light={light}
        src="https://d1bm787ano0ks5.cloudfront.net/Custom/Content/Products/32/18/3218_placa-margirius-sleek-4x2-16017-c-1s-bc-c-sup-000-00-00-244_m1_637341412420012193.png">
      </Fase3Img>
      <LigthButton onClick={()=> setLight(!light)} ></LigthButton>
      <Text light={light}>{!light ? "299.792.458 m/s" : "14 59"}</Text>
      <Answer onClick={()=> window.prompt(`Resposta:`)==="pirilampo" && navigate("/qui_manca_qualcosa")}>Responder</Answer>
    </FaseContainer>
    </>
  )
}

const Fase3Img = styled(FaseImage)`
  background-color: transparent;
  position: relative;
  width: 300px;
  height: auto;
  filter: ${props=> props.light ? "drop-shadow(0px 0px 4px black)" : "drop-shadow(0px 0px 4px white)"}
` 

const LigthButton = styled.button`
  position: fixed;
  height: 50px;
  width: 93px;
  background-color: transparent;
  border: none;
  top: 240px;
`