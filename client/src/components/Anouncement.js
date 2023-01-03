import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: #229b99;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Anouncement = () => {
  return (
    <div>
      <Container>
        <h4 className="Anouncement">
          Super Deal! Free Shipping on Orders over 50$
        </h4>
      </Container>
    </div>
  );
};

export default Anouncement;
