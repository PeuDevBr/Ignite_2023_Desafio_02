import { CoffeeCard } from './Components/coffeeCard'
import { Items } from './Components/items'
import {
  CoffeeListContainer,
  IntroContainer,
  ItemsContainer,
  TitleContainer,
} from './styles'
import coffeeImage from '../../assets/cup.svg'

export function Home() {
  return (
    <>
      <IntroContainer>
        <div>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContainer>
          <ItemsContainer>
            <Items
              color="#C47F17"
              text="Compra simple e segura"
              image="ShoppingCart"
            />
            <Items
              color="#574F4D"
              text="Embalagem mantém o café intacto"
              image="Package"
            />
            <Items
              color="#DBAC2C"
              text="Entrega rápida e rastreada"
              image="Timer"
            />
            <Items
              color="#8047FB"
              text="O café chega fresquinho até você"
              image="Coffee"
            />
          </ItemsContainer>
        </div>
        <div>
          <img src={coffeeImage} alt="" />
        </div>
      </IntroContainer>
      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <div className="gridContainer">
          <CoffeeCard />
        </div>
      </CoffeeListContainer>
    </>
  )
}
