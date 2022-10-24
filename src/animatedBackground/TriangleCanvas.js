import Triangle from "./Triangle";
import Triangle2 from "./Triangle2";
import Triangle3 from "./Triangle3";
import styled from "styled-components";

function TriangleCanvas() {

  return (
  <Wrapper>
  {/* FAR AWAY - small, slow, more */}
    <FallingStar >
      <Triangle position={[15, 65]} fieldX={15} size={15} />
    </FallingStar>
    <FallingStar >
      <Triangle position={[89, 20]} fieldX={20} size={20} />
    </FallingStar>
    <FallingStar >
      <Triangle position={[33, 30]} fieldX={25} size={25} />
    </FallingStar>
    <FallingStar >
      <Triangle position={[89, 20]} fieldX={20} size={20} />
    </FallingStar>
    <FallingStar >
      <Triangle position={[33, 30]} fieldX={25} size={25} />
    </FallingStar>
    <FallingStar >
      <Triangle position={[59, 65]} fieldX={36} size={35} />
    </FallingStar>
    <FallingStar >
      <Triangle position={[22, 65]} fieldX={28} size={28} />
    </FallingStar>
    <FallingStar >
      <Triangle position={[97, 65]} fieldX={32} size={32} />
    </FallingStar>


{/* MEDIUM RANGE  */}
    <FallingStar2>
      <Triangle2 position={[5, 5]} fieldX={60} size={60} />
    </FallingStar2>
    <FallingStar2 >
      <Triangle2 position={[82, 10]} fieldX={70} size={70} />
    </FallingStar2>
    <FallingStar2>
      <Triangle2 position={[69, 72]} fieldX={74} size={74} />
    </FallingStar2>
    <FallingStar2 >
      <Triangle2 position={[42, 72]} fieldX={70} size={70} />
    </FallingStar2>
    <FallingStar2 >
      <Triangle2 position={[28, 72]} fieldX={55} size={55} />
    </FallingStar2>

{/* CLOSE RANGE - big fast less */}
    <FallingStar3 >
      <Triangle3 position={[60, 50]} fieldX={110} size={110} />
    </FallingStar3>
    <FallingStar3 >
      <Triangle3 position={[2, 5]} fieldX={100} size={100} />
    </FallingStar3>
    <FallingStar3 >
      <Triangle3 position={[25, 25]} fieldX={90} size={90} />
    </FallingStar3>
    <FallingStar3 >
      <Triangle3 position={[73, 25]} fieldX={80}  size={80} />
    </FallingStar3>
</Wrapper>
  )
}

export default TriangleCanvas;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0%;
  overflow: hidden;
  background-color: transparent;
`;
const FallingStar = styled.div`
  position: absolute;
  width: 100%;
  bottom: -5%;
  z-index: 1;
`;
const FallingStar2 = styled.div`
  position: absolute;
  width: 100%;
  bottom: -5%;
  z-index: 2;
`;
const FallingStar3 = styled.div`  
  position: absolute;
  width: 100%;
  bottom: -5%;
  z-index: 3;
`;