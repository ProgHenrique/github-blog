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
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useCallback, useContext, useEffect } from 'react'
import { GithubBlogContext } from '../../contexts/GithubBlogContext'
import { useParams } from 'react-router-dom'

export function Post() {
  const { postInfos, issuePostFetch } = useContext(GithubBlogContext)
  const { idPost } = useParams()

  const getPostData = useCallback(async () => {
    await issuePostFetch(Number(idPost))
  }, [idPost, issuePostFetch])

  useEffect(() => {
    getPostData()
  }, [getPostData])

  return (
    <MainContainer>
      <PostHeader>
        <div id="links">
          <Link href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </Link>
          <Link href={postInfos.issueURL}>
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>

        <h1 id="postTitle">{postInfos.title}</h1>

        <IconsInformation>
          <span>
            <FontAwesomeIcon icon={faGithub} className="Icons" />
            {postInfos.user}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} className="Icons" />
            {postInfos.createAt}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} className="Icons" />{' '}
            {postInfos.comments} comentários
          </span>
        </IconsInformation>
      </PostHeader>
      <PostContent>
        <ReactMarkdown
          children={postInfos.postContent}
          className="line-break"
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')

              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula as {}}
                  PreTag="div"
                  language={match[1]}
                  children={String(children).replace(/\n$/, '')}
                  {...props}
                />
              ) : (
                <code className={className || ''} {...props}>
                  {children}
                </code>
              )
            },
          }}
          remarkPlugins={[remarkGfm]}
        />
      </PostContent>
    </MainContainer>
  )
}
