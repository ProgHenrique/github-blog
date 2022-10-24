import { HeaderContainer } from './styles'
import logo from '../../assets/project-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" width={45} />
        <span>GITHUB BLOG</span>
      </div>
    </HeaderContainer>
  )
}
