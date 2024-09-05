import styled from 'styled-components'

export const Header = styled.div`
display: flex;
align-items: flex-end;
justify-content: end;
background-color: #60ac5b;
width: 100%;
height: 150px;
`;

export const Navbar = styled.nav`
display: inline-flex;
align-items: center;
justify-content: center;
width: 500px;
margin-right: 100px;


ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
    margin-right: 20px;

  }
  li a {
    color: white;
  }

  li:last-child {
    margin-right: 0;
    color: white;
  }
`;