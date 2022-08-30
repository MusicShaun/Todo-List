import styled from 'styled-components';
import { device , fontsize} from './device';

export default function Todos({todo, handleCheck}) {

  return (
    <UnorderedList >

      {todo.map((todo, index) => {
          return (    
          <ListItem key={index}>
            <Input type='checkbox' 
              id={todo.id} 
              name={todo.name} 
              checked={todo.checking}
              onChange={handleCheck}
              />
            <Label htmlFor={todo.id}></Label>
            <Div>{todo.name}</Div>
          </ListItem>
        )}
          )
      }
    </UnorderedList>  
  ) 
}

const UnorderedList = styled.ul`
  width: 90%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0;

  @media screen and (max-width: 700px) {
   margin-top: 0rem;
  }
`;
const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  flex-direction: row;
  border-bottom: 1px dotted lightgrey;
  
  @media screen and (max-width: 700px) {
   width: 100%; 
  }
`;

const Input = styled.input.attrs({
  type: 'checkbox'
})`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  visibility: hidden;
    cursor: pointer;
  &:checked + label {
    background-color: #6dff13;
  }
  &:checked + label:after {
    content: '';
    border-bottom: 4px white solid;
    border-right: 4px white solid;
    height: 16px;
    width: 7px;
    transform: rotate(45deg);
    top: 5px;
    ${device.mobile}{
      border-bottom: 2px white solid;
      border-right: 2px white solid;
      height: 12px;
      width: 4px;

  }
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem 0;
  max-width: 30px;
  width: 30px;
  max-height: 30px;
  height: 30px;
  padding: 3px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  ${device.mobile}{
    width: 20px;
    height: 20px;
    margin: 0.25rem 0;
  }
  ${device.tablet}{
    width: 25px;
    height: 25px;
    margin: 0.4rem 0;
  }
  ${device.desktop}{
    width: 30px;
    height: 30px;
    margin: 0.5rem 0;
  }

`;

const Div = styled.div`
  margin-left: 2rem;
  padding: 1rem 0;
  @media screen and (max-width: 700px) {
    margin-left: 1rem;
  }
  ${device.mobile} {
    font-size: ${fontsize.mobile};
    padding: 0.5rem 0;
  }
  ${device.tablet} { 
    font-size: ${fontsize.tablet};
    padding: 0.75rem 0;
  }
  ${device.desktop} { 
    font-size: ${fontsize.desktop};
    padding: 0.75rem 0;
  }
`;
