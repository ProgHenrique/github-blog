import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  max-width: 864px;
  margin: 0 auto;
`

export const ProfileSection = styled.section`
  display: flex;
  gap: 2rem;
  margin-top: -5.5rem;
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;
  border-radius: 10px;

  img {
    border-radius: 8px;
  }

  #profileInformations {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    height: 100%;
  }
`

export const GithubName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  strong {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Link = styled.a`
  display: flex;
  text-decoration: inherit;
  color: inherit;
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
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

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
