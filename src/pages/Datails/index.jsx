import { Container, Links } from'./styles.js'

import { Tag } from '../../components/Tag/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { Section } from'../../components/Section'
import { ButtonText } from '../../components/ButtonText/index.jsx'

export function Details (){

   return(
   <Container>
      <Header/>
      <ButtonText title="Excluir nota"/>
      <Section title="Links úteis">
         <Links>
            <li>
               <a href="#">https://www.rocketseat.com.br/</a>
            </li>
            <li>
            <a href="#">https://www.rocketseat.com.br/</a>
            </li>
         </Links>
      </Section>
      <Section title="Marcadores">
         <Tag title="express"/>
         <Tag title="nodejs"/>
      </Section>
      <Button title="Voltar" />
   </Container>
   )
}