import { Header} from '../../components/header'
import { Input} from '../../components/Input'
import {Container, Form} from './styles'


export function New(){
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">volta</a>
          </header>

          <Input placeholder="Título"/>
        </Form>
      </main>
    </Container>
  )
}