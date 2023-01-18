import styled from 'styled-components'

export const ListItem = styled.li<{ visible?: boolean }>`
  cursor: pointer;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 1.25rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ul {
    height: auto;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    background: ${p => p.theme.palette.secondary.main};
    padding: 1.375rem 2rem 2rem;
    align-items: flex-start;
    left: 50%;
    transform: translateX(-50%);
    text-align: left;
    min-width: 10.3rem;
    box-sizing: border-box;
  }

  li {
    padding: 0.5rem 0;
    margin: 0;
  }
`

export const Link = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`

export const Button = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  display: block;
  padding: 0;
`
