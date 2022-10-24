import styled from 'styled-components';
import AddTodos from './AddTodos';
import TriangleCanvas from './animatedBackground/TriangleCanvas';
import { useWindowHeight } from '@react-hook/window-size'


export default function App() {
  const onlyHeight = useWindowHeight()

  return (
    <AppWrapper style={{ minHeight: `${onlyHeight}px`}}> 
      <TriangleCanvas />
      {/* <AddTodos onlyHeight={onlyHeight}/> */}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: rgb(249, 222, 86);
  overflow: hidden auto;
`;