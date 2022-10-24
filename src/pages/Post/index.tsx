/* eslint-disable react/no-children-prop */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IconsInformation,
  Link,
  MainContainer,
  PostContent,
  PostHeader,
} from './styles'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Post() {
  const markdown = `
  ### 👋Oii me chamo Henrique Ramos, 21

  Sempre fui um aficionado por
  tecnologia e super curioso, e foram esses pilares que trouxeram até aqui.
  Me tornar um Dev Back-end nunca esteve tão perto. Acredito que
  você também seja um apaixonado(a) vamos caminhar juntos?🧑‍💻🏆

  ## Tecnologies of my day

  ### Contact me
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/henrique-ramos-24637a184/)
  `
  return (
    <MainContainer>
      <PostHeader>
        <div id="links">
          <Link href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </Link>
          <Link href="">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>

        <h1 id="postTitle">JavaScript data types and data structures</h1>

        <IconsInformation>
          <span>
            <FontAwesomeIcon icon={faGithub} className="Icons" />
            ProgHenrique
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} className="Icons" />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} className="Icons" /> 5 comentários
          </span>
        </IconsInformation>
      </PostHeader>
      <PostContent>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </PostContent>
    </MainContainer>
  )
}
