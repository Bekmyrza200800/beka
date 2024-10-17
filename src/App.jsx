import { products } from "./utils/constants.js";
import Icon from "./assets/shoes/svg/heart-icon.svg";
import styled from "styled-components";

function App() {
  return (
    <>
      <HeaderDiv>
        <Hdh1>Все Кросовки</Hdh1>
        <ShoeBlock>
          {products.map((item) => (
            <DivShoes>
              <Icon1 src={Icon} alt="" />
              <ImgShoes src={item.image} alt="sheeesh" />
              <MainP>{item.title}</MainP>
              <Price00>{item.price0}</Price00>
              <PriceShoes>{item.price}</PriceShoes>
            </DivShoes>
          ))}
        </ShoeBlock>
      </HeaderDiv>
    </>
  );
}

const HeaderDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

const ShoeBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 210px;
  height: 250px;
  top: -3px;
  border-radius: 40px;
  border: 1px;
  margin-left: 200px;
  margin-right: 30px;
`;

const DivShoes = styled.div`
  width: 210px;
  border: 1px solid #f3f3f3;
  border-radius: 30px;
  font-size: 13px;
  height: 270px;
  &:hover {
    box-shadow: -2px 13px 21px 1px rgba(209, 208, 208, 0.75);
  }
`;
const Icon1 = styled.img`
  width: 30px;
  position: absolute;
  margin-top: 15px;
  margin-left: 15px;
  border: 1px solid rgb(253, 242, 242);
  border-radius: 5px;
  padding: 5px;
  background-color: #fff;
  cursor: pointer;
`;
const ImgShoes = styled.img`
  width: 133px;
  height: 112px;
  margin-left: 40px;
  padding-top: 22px;
`;
const Price00 = styled.div`
  font-weight: bold;
  color: #f8f8f8;
  font-size: 10px;
  margin-left: 30px;
  margin-top: 30px;
`;
const PriceShoes = styled.span`
  font-weight: bolder;
  margin-left: 30px;
  padding-bottom: 34px;
`;
const Hdh1 = styled.h1`
  padding-bottom: 30px;
  margin-left: 200px;
`;
const MainP = styled.p`
  margin-left: 30px;
  margin-right: 30px;
`;

export default App;
