import styled from "styled-components";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { useState } from "react";
import { sliderItems } from "../data.js";

const Container = styled.div`
  height: 89.1vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;

  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e7e8e2;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;

  cursor: pointer;
  opacity: 0.3;
  z-index: 9999;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw) !important;
  transition: all 1s ease-in-out;
`;

const Slide = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
//Image style
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 80%;
`;

//Info Style
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h2`
  font-size: 100px;
`;
const Desc = styled.p`
  font-size: 30px;
  letter-spacing: 3px;
  margin: 50px 0px;
`;
const Button = styled.button`
  padding: 20px;
  background-color: transparent;
  border-color: #229b99;
  border-radius: 5px;
  font-size: 30px;
  font-weight: 600;

  cursor: pointer;
  :hover {
    background-color: #229b99;
    color: #fff;
  }
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <RiArrowLeftSFill />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((element) => (
            <Slide bg={element.bg} key={element.id}>
              <ImageContainer>
                <Image src={element.img} />
              </ImageContainer>

              <InfoContainer>
                <Title>{element.title}</Title>
                <Desc>{element.desc}</Desc>
                <Button>Show Now</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <RiArrowRightSFill />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
