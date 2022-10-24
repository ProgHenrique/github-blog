import styled from 'styled-components'
import headerCover from '../../assets/cover-header.svg'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  width: 100%;
  background-image: url(${headerCover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;

  div {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    span {
      display: flex;
      height: 2.375rem;
      align-items: center;
      font-family: 'Coda', cursive;
      font-size: 1.5rem;
      color: ${(props) => props.theme.blue};
    }
  }
`
