import { useNavigate } from 'react-router-dom'
import { Article, Input, PostsContainer, Publications } from './styles'

export function SearchAndPosts() {
  const navigate = useNavigate()
  function handleShowPost() {
    navigate('/post')
  }

  const postContent = `Programming languages all have built-in data structures, but these
  often differ from one language to another. This article attempts to
  list the built-in data structures available in JavaScript and what
  properties they have. These can be used to build other data
  structures. Wherever possible, comparisons with other languages are
  drawn. Dynamic typing JavaScript is a loosely typed and dynamic
  language. Variables in JavaScript are not directly associated with
  any particular value type, and any variable can be assigned (and
  re-assigned) values of all types: let foo = 42; // foo is now a
  number foo = bar; // foo is now a string foo = true; // foo is now a
  boolean`

  const postContentCut =
    postContent.length > 185
      ? postContent.substring(0, 185) + '...'
      : postContent

  return (
    <section>
      <Publications>
        <span>Publicações</span>
        <span>6 publicações</span>
      </Publications>

      <Input type="text" placeholder="Buscar conteúdo" />

      <PostsContainer>
        <Article onClick={handleShowPost}>
          <div>
            <h1>JavaScript data types and data structures</h1>
            <span>há 1 dia</span>
          </div>
          <p>{postContentCut}</p>
        </Article>

        <Article>
          <div>
            <h1>JavaScript data types and data structures</h1>
            <span>há 1 dia</span>
          </div>
          <p>{postContentCut}</p>
        </Article>

        <Article>
          <div>
            <h1>JavaScript data types and data structures</h1>
            <span>há 1 dia</span>
          </div>
          <p>{postContentCut}</p>
        </Article>

        <Article>
          <div>
            <h1>JavaScript data types and data structures</h1>
            <span>há 1 dia</span>
          </div>
          <p>{postContentCut}</p>
        </Article>
      </PostsContainer>
    </section>
  )
}
