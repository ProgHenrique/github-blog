import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import {
  GithubName,
  IconsInformation,
  Link,
  MainContainer,
  ProfileSection,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { SearchAndPosts } from './components/SearchAndPosts'
import { useContext } from 'react'
import { GithubBlogContext } from '../../contexts/GithubBlogContext'

const userName = String(import.meta.env.VITE_GITHUB_PROFILE)

export function Home() {
  const { userInfos } = useContext(GithubBlogContext)
  return (
    <MainContainer>
      <ProfileSection>
        <img src={userInfos.avatar_URL} alt="" width={148} />
        <div id="profileInformations">
          <GithubName>
            <strong>{userInfos.name}</strong>
            <Link href={`https://github.com/${userName}`} target="_blank">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </GithubName>
          <p id="descriptionProfile">{userInfos.bio}</p>

          <IconsInformation>
            <span>
              <FontAwesomeIcon icon={faGithub} className="Icons" />
              {userName}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} className="Icons" />
              {userInfos.company === null ? 'Anyone' : userInfos.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} className="Icons" />
              {userInfos.followers === 1
                ? '1 seguidor'
                : `${userInfos.followers} seguidores`}
            </span>
          </IconsInformation>
        </div>
      </ProfileSection>

      <SearchAndPosts />
    </MainContainer>
  )
}
