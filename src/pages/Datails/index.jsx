import { Container } from'./styles.js'

import { Button } from '../../components/Button/index.jsx'

export function Details (){

   return(
   <Container>
      <h1>Olá Mundo de Bob!</h1>
      <span>Elaine Leandro</span>
      <Button title="Entrada" loading/>
      <Button title="Casdastro"/>
      <Button title="Saída"/>
   </Container>
   )
}