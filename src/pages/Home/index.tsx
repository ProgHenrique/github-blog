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

export function Home() {
  return (
    <MainContainer>
      <ProfileSection>
        <img
          src="https://avatars.githubusercontent.com/u/86138985?v=4"
          alt=""
          width={148}
        />
        <div id="profileInformations">
          <GithubName>
            <strong>Henrique Ramos</strong>
            <Link href="https://github.com/ProgHenrique" target="_blank">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </GithubName>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <IconsInformation>
            <span>
              <FontAwesomeIcon icon={faGithub} className="Icons" />
              ProgHenrique
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} className="Icons" />
              Rocketseat
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} className="Icons" />
              32 seguidores
            </span>
          </IconsInformation>
        </div>
      </ProfileSection>

      <SearchAndPosts />
    </MainContainer>
  )
}
