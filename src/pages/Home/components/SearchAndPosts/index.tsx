import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GithubBlogContext } from '../../../../contexts/GithubBlogContext'
import { Article, Input, PostsContainer, Publications } from './styles'

export function SearchAndPosts() {
  const { issues, githubIssuesFetch } = useContext(GithubBlogContext)
  const [inputValue, setInputValue] = useState('')

  const navigate = useNavigate()
  function handleShowPost(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    const idPost = event.currentTarget.id
    navigate(`/post/${idPost}`)
  }

  async function handleFilterIssuePost(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    const query = inputValue.split(' ').filter(Boolean)

    if (issues.length < 1) {
      return await githubIssuesFetch(query.join('%20'))
    }

    if (query.length < 1) {
      setInputValue('')
      return null
    }

    await githubIssuesFetch(query.join('%20'))

    setInputValue('')
  }

  return (
    <section>
      <Publications>
        <span>Publicações</span>
        <span>
          {issues.length === 1
            ? '1 publicação'
            : `${issues.length} publicações`}
        </span>
      </Publications>

      <form onSubmit={handleFilterIssuePost}>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>

      <PostsContainer>
        {issues.map((issue) => {
          const postContent = issue.postContent

          const postContentCut =
            postContent.length > 185
              ? postContent.substring(0, 185) + '...'
              : postContent

          return (
            <Article
              onClick={(e) => handleShowPost(e)}
              key={issue.number}
              id={String(issue.number)}
            >
              <div>
                <h1>{issue.title}</h1>
                <span>{issue.createdAt}</span>
              </div>
              <p>{postContentCut}</p>
            </Article>
          )
        })}
      </PostsContainer>
    </section>
  )
}
