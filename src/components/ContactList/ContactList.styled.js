import styled from "styled-components";
import {FaUserAstronaut} from 'react-icons/fa';

export const List = styled.ul`
padding: 0 20px;
`;

export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 5px;
padding: 5px;
border-bottom: 1px dashed #fff; 
`;

export const IconUser = styled(FaUserAstronaut)`
color: #fff;
margin-right: 5px;
`;

export const Text = styled.p`
font-size: 20px;
font-weight: 500;
`;


export const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 5px;
  border: 1px dashed #fff;
  color: #fff;
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: 	#EE4B2B;
    border-color: #EE4B2B;
  }
`;

