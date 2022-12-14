import styled from 'styled-components';
import {useState, useEffect, useRef } from 'react'; 
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';
import {device, fontsize} from './device';

export default function AddTodos(props) {
  const { onlyHeight } = props;
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('list')) || []);
  const getTodoName = useRef(); 

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todo));
  }, [todo])
  
 
  function handleAddToDo(e) {
    e.preventDefault();
    const name = getTodoName.current.value; 
    if (name === '' ) return
    setTodo(prevTodo => {
      return [...prevTodo, {id: uuidv4(), name:name, checking:false}]
    })
    getTodoName.current.value = null;
    getTodoName.current.focus();
  }

  function handleCheck(e) {
    const newState = todo.map((obj) => {
       return obj.id === e.target.id ? {...obj, checking: !obj.checking } : { ...obj};
    });
    setTodo(newState);
  };

  function handleDelete(e) {
    e.preventDefault();
    const newState = todo.filter((obj) => {
      if (obj.checking === false) {
        return {...obj};
      } 
      return null;
    })
    setTodo(newState)
  }

  return (<>
    <Wrapper   style={{minHeight: `${0.85 * onlyHeight}%`}}>
      <H1>My To-do's</H1>

      <AddForm>
        <Input type='text' ref={getTodoName} autoFocus/>
        <Buttons>
          <Button onClick={handleAddToDo}>Submit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Buttons>
      </AddForm>

      <Todos todo={todo}
        handleCheck={handleCheck} 
        >     
      </Todos>

    </Wrapper>
  </>)
}
const Wrapper = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 80%;
  border-radius: 25px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 3;
  ${device.mobile} {
    max-width: 90%;
  }
  ${device.tablet} { 
    max-width: 50%;
  }
`;
const H1 = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  padding: 0;
  margin: 1rem 1rem 0rem 1rem;
  width: 90%;
  text-decoration: underline;
  color: #343332;
  ${device.mobile} {
    font-size: 2rem;
  }
  ${device.tablet} { 
    font-size: 2.5rem;
  }
  ${device.desktop} { 
    font-size: 3rem;
  }
`;
const AddForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  width: 90%;
`;
const Input = styled.input`
  padding: 0.6rem;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: ${fontsize.desktopL};

  @media screen and (max-width: 700px) {
    padding: 0.3rem;
    font-size: 1.1rem;
  }
  ${device.mobile} {
    font-size: ${fontsize.mobile};
  }
  ${device.tablet} { 
    font-size: ${fontsize.tablet};
  }
  ${device.desktop} { 
    font-size: ${fontsize.desktop};
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Button = styled.button`
  margin: 1rem;
  background-color: rgb(249, 222, 86);
  width: 150px;
  height: 75px;
  border: 1px solid grey;
  border-radius: 16px;
  transition: 0.1s ease-out;
  font-size: ${fontsize.desktopL};
  ${device.mobile} {
    font-size: ${fontsize.mobile};
    width: 100px;
    height: 50px;
  }
  ${device.tablet} { 
    font-size: ${fontsize.tablet};
    width: 110px;
    height: 50px;
  }
  ${device.desktop} { 
    font-size: ${fontsize.desktop};
    width: 130px;
    height: 60px;
  }
  cursor: pointer;
  &:hover {
    transition: 0.1s ease-out;
    font-weight: bold;
    background-color: rgba(249, 242, 86, 1);
  }
  :active {
    background: rgba(120, 232, 86, 1);
    box-shadow: inset 5px 5px 5px #c1c1c1;
    outline: none;
    width: 90px;
    height: 45px;
}
`;