import { FiPlus, FiSearch } from 'react-icons/fi'

import {Container, Brand, Menu, Search, Content, NewNote} from './styles'

import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import { Input } from '../../components/input'

export function Home(){
  return(
    <Container>
      <Brand>
        <h1> Rocket Notes</h1>
      </Brand>

      <Header/>
      
      <Menu>
       <li><ButtonText title="Todos" isActive/></li>
       <li><ButtonText title="React"/></li>
       <li><ButtonText title="Node"/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisa pelo título" icon={FiSearch}/>
      </Search>

      <Content>
    
      </Content>

      <NewNote>
        <FiPlus/>
        Criar nota
      </NewNote>

    </Container>
  )
}