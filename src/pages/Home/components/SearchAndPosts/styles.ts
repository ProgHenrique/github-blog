import styled from 'styled-components'

export const Publications = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  span:first-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
    font-size: 1.125rem;
    height: 1.8125rem;
  }

  span:last-child {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    height: 1.375rem;
  }
`

export const Input = styled.input`
  width: 100%;
  margin-bottom: 3rem;
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border: 0;
  border-radius: 6px;

  outline: 1px solid ${(props) => props.theme['base-border']};
  outline-offset: -1px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
`

export const Article = styled.article`
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  gap: 1.25rem;
  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;
    height: 4rem;

    h1 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      width: 17.6875rem;
      padding-right: 20px;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      height: 1.375rem;
    }
  }

  p {
    display: flex;
    width: 100%;
    height: 7rem;
  }
`
