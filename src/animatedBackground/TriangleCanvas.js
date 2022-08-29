import Triangle from "./Triangle";
import Triangle2 from "./Triangle2";
import Triangle3 from "./Triangle3";
import styled from "styled-components";

function TriangleCanvas() {

  return (
  <Wrapper>
  {/* FAR AWAY - small, slow, more */}
    <FallingStar style={{animationDelay: `8s`}}>
      <Triangle position={[15, 65]} fieldX={15} size={15} />
    </FallingStar>
    <FallingStar style={{animationDelay: `0s`}}>
      <Triangle position={[89, 20]} fieldX={20} size={20} />
    </FallingStar>
    <FallingStar style={{animationDelay: `3s`}}>
      <Triangle position={[33, 30]} fieldX={25} size={25} />
    </FallingStar>
    <FallingStar style={{animationDelay: `22s`}}>
      <Triangle position={[59, 65]} fieldX={36} size={35} />
    </FallingStar>
    <FallingStar style={{animationDelay: `15s`}}>
      <Triangle position={[22, 65]} fieldX={40} size={40} />
    </FallingStar>
    <FallingStar style={{animationDelay: `36s`}}>
      <Triangle position={[97, 65]} fieldX={45} size={45} />
    </FallingStar>


{/* MEDIUM RANGE  */}
    <FallingStar2 style={{animationDelay: `2s`}}>
      <Triangle2 position={[5, 5]} fieldX={65} size={65} />
    </FallingStar2>
    <FallingStar2 style={{animationDelay: `32s`}}>
      <Triangle2 position={[82, 10]} fieldX={75} size={75} />
    </FallingStar2>
    <FallingStar2 style={{animationDelay: `24s`}}>
      <Triangle2 position={[69, 72]} fieldX={80} size={80} />
    </FallingStar2>
    <FallingStar2 style={{animationDelay: `15s`}}>
      <Triangle2 position={[42, 72]} fieldX={70} size={70} />
    </FallingStar2>
    <FallingStar2 style={{animationDelay: `10s`}}>
      <Triangle2 position={[28, 72]} fieldX={60} size={60} />
    </FallingStar2>

{/* CLOSE RANGE - big fast less */}
    <FallingStar3 style={{animationDelay: `0s`}}>
      <Triangle3 position={[60, 50]} fieldX={110} size={110} />
    </FallingStar3>
    <FallingStar3 style={{animationDelay: `9s`}}>
      <Triangle3 position={[2, 5]} fieldX={100} size={100} />
    </FallingStar3>
    <FallingStar3 style={{animationDelay: `17s`}}>
      <Triangle3 position={[25, 25]} fieldX={90} size={90} />
    </FallingStar3>
    <FallingStar3 style={{animationDelay: `28s`}}>
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
  top: -40%;
  animation: fallen 40s infinite linear;
  @keyframes fallen {
    from {top: 110%
    } to {top: -10%
  }}
  z-index: 2;
`;
const FallingStar2 = styled.div`
  position: absolute;
  width: 100%;
  top: -40%;
  animation: fallen2 40s infinite linear;
  @keyframes fallen2 {
    from {top: 115%
    } to {top: -100%
  }}
  z-index: 1;
`;
const FallingStar3 = styled.div`  
  position: absolute;
  width: 100%;
  top: -40%;
  animation: fallen3 40s infinite linear;
  @keyframes fallen3 {
    from {top: 110%
    } to {top: -200%
  }}
  z-index: 0;
`;