import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubBlogProvider } from './contexts/GithubBlogContext'
import { GlobalStyle } from './global'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GithubBlogProvider>
          <Router />
        </GithubBlogProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
