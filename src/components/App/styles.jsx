import styled, {createGlobalStyle} from 'styled-components';
import {Link} from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body,
ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
}

input,
button {
  border: none;
  outline: none;
}

`;

export const Wrapper = styled.div`
     padding: 10px;
     background: #eeeeee;
     box-shadow: 1px 20px 20px #eeeeee;
`;

export const Navigation = styled.ul`
     display: flex;
     padding: 20px 0 20px 20px;
`;


export const NavigationLink = styled(Link)`
     text-decoration: none;
     color: black;
     margin: 5px 10px;
     background: #dbdbdb;
     padding: 5px;
     border-radius: 5px;
`;