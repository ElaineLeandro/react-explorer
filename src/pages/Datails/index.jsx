import { Container, Links , Content} from'./styles.js'

import { Tag } from '../../components/Tag/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { Section } from'../../components/Section'
import { ButtonText } from '../../components/ButtonText/index.jsx'

export function Details (){

   return(
   <Container>
      <Header/>
      <main>
      <Content>
      <ButtonText title="Excluir nota"/>
      <h1>Introdução ao React</h1>
      <p>O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Criado em 2011 pelo  Fecebook  com a criação de views declarativas e baseando-se em componentes, possuía o intuito de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social e melhorar a manutenção de código.Semelhante ao HTML, o JSX é uma extensão de sintaxe para JavaScript. Embora seu uso não seja obrigatório, a maioria dos desenvolvedores o utiliza para descrever como a UI deveria parecer.</p>
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

      </Content>
      </main>
   </Container>
   )
}