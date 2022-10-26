import markdownToTxt from 'markdown-to-txt'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'
import { howLongHavePost } from '../utils/DistanceToNow'

interface UserInfos {
  avatar_URL: string
  name: string
  bio: string
  followers: number
  company: string
}

interface Issues {
  title: string
  createdAt: string
  postContent: string
  number: number
}

interface PostInfos {
  user: string
  title: string
  createAt: string
  comments: number
  issueURL: string
  postContent: string
}

interface githubIssuesFetchType {
  created_at: string
  title: string
  body: string
  number: number
}

interface GithubBlogContextType {
  userInfos: UserInfos
  issues: Issues[]
  postInfos: PostInfos
  issuePostFetch: (idPost: number) => Promise<void>
  githubIssuesFetch: (query?: string) => Promise<void>
}

export const GithubBlogContext = createContext({} as GithubBlogContextType)

interface GithubBlogProviderProps {
  children: ReactNode
}

const variables = {
  user: import.meta.env.VITE_GITHUB_PROFILE,
  repo: import.meta.env.VITE_REPO,
}

export function GithubBlogProvider({ children }: GithubBlogProviderProps) {
  const [userInfos, setUserInfos] = useState<UserInfos>({} as UserInfos)
  const [issues, setIssues] = useState<Issues[]>([])
  const [postInfos, setPostInfos] = useState<PostInfos>({} as PostInfos)

  const githubUserFetch = useCallback(async () => {
    const response = await api.get(`users/${variables.user}`)

    const userData = response.data

    setUserInfos({
      avatar_URL: userData.avatar_url,
      name: userData.name,
      bio: userData.bio,
      followers: userData.followers,
      company: userData.company,
    })
  }, [])

  const githubIssuesFetch = useCallback(async (query: string = '') => {
    const response = await api.get(
      `search/issues?q=${query}%20repo:${variables.user}/${variables.repo}`,
    )
    const userData = response.data.items as githubIssuesFetchType[]

    const issuesOnGithub: Issues[] = []

    userData.map((data) => {
      const content = markdownToTxt(data.body)
      const issue = {
        title: data.title,
        postContent: content,
        createdAt: howLongHavePost(data.created_at),
        number: data.number,
      }

      issuesOnGithub.push(issue)

      return null
    })

    setIssues(issuesOnGithub)
  }, [])

  const issuePostFetch = useCallback(async (idPost: number) => {
    const response = await api.get(
      `repos/${variables.user}/${variables.repo}/issues/${idPost}`,
    )

    const postData = response.data

    setPostInfos({
      user: postData.user.login,
      title: postData.title,
      createAt: howLongHavePost(postData.created_at),
      comments: postData.comments,
      issueURL: postData.html_url,
      postContent: postData.body,
    })
  }, [])

  useEffect(() => {
    githubUserFetch()
    githubIssuesFetch()
  }, [githubUserFetch, githubIssuesFetch])

  return (
    <GithubBlogContext.Provider
      value={{
        userInfos,
        issues,
        issuePostFetch,
        postInfos,
        githubIssuesFetch,
      }}
    >
      {children}
    </GithubBlogContext.Provider>
  )
}
