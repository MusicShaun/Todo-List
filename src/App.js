import styled from 'styled-components';
import AddTodos from './AddTodos';
import TriangleCanvas from './animatedBackground/TriangleCanvas';

export default function App() {

  return (
    <AppWrapper > 
    <TriangleCanvas />
      <AddTodos/>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100%;

  display: flex;
  justify-content: center;
  background-color: rgb(249, 222, 86);
`;