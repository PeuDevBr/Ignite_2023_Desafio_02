import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import { CoffeeCardContainer } from './styles'
import { useContext } from 'react'
import {
  ProductProps,
  DeliveryContext,
} from '../../../../contexts/DeliveryContext'

export function CoffeeCard() {
  const { productList, addProductToCartList, updateProductQuantity } =
    useContext(DeliveryContext)

  return (
    <>
      {productList.map((coffee: ProductProps) => {
        return (
          <CoffeeCardContainer key={coffee.title}>
            <img src={coffee.image} alt={coffee.title} />
            <div className="tagsContainer">
              {coffee.types.map((type) => {
                return (
                  <div key={type} className="tags">
                    <span>{type.toUpperCase()}</span>
                  </div>
                )
              })}
            </div>
            <p className="title">{coffee.title}</p>
            <p className="description">{coffee.description}</p>
            <div className="priceContainer">
              <p>
                R$ <span>{coffee.amount}</span>
              </p>
              <div className="addContainer">
                <div className="counterContainer">
                  <button
                    onClick={() => {
                      const DecrementArguments = {
                        coffeTitle: coffee.title,
                        increment: coffee.count - 1,
                        type: 'incrementProduct',
                      }
                      updateProductQuantity(DecrementArguments)
                    }}
                  >
                    <Minus color="#8047FB" weight="bold" />
                  </button>
                  <span>{coffee.count} </span>
                  <button
                    onClick={() => {
                      const IncrementArguments = {
                        coffeTitle: coffee.title,
                        increment: coffee.count + 1,
                        type: 'incrementProduct',
                      }
                      updateProductQuantity(IncrementArguments)
                    }}
                  >
                    <Plus color="#8047FB" weight="bold" />
                  </button>
                </div>
                <button
                  className="iconContainer"
                  onClick={() => {
                    addProductToCartList(coffee)
                  }}
                >
                  <ShoppingCart color="#FFFFFF" weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeCardContainer>
        )
      })}
    </>
  )
}
