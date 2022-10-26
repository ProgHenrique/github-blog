import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 864px;
  margin: 0 auto;
`

export const PostHeader = styled.section`
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -5.5rem;

  #links {
    display: flex;
    justify-content: space-between;
  }

  h1#postTitle {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-top: 1.25rem;
  }
`

export const Link = styled.a`
  display: flex;
  text-decoration: inherit;
  height: 1.1875rem;
  gap: 0.5rem;
  align-items: center;
  color: ${(props) => props.theme.blue};
  font-size: 0.8125rem;

  &:link,
  &:hover {
    color: inherit;
    text-decoration: inherit;
  }
`

export const IconsInformation = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    .Icons {
      color: ${(props) => props.theme['base-label']};
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`

export const PostContent = styled.section`
  padding: 2.5rem 2rem;

  .line-break {
    white-space: pre-wrap;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: inherit;
    &:link,
    &:hover {
      color: ${(props) => props.theme.blue};
      text-decoration: inherit;
    }
  }
`
