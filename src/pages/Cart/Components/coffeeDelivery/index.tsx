import { DeliveryContainer, CoffeeCard, PriceContainer } from './styles'
import { Trash } from 'phosphor-react'
import { formatPrice } from '../../../../util/format'
import { useContext } from 'react'
import {
  ProductProps,
  DeliveryContext,
} from '../../../../contexts/DeliveryContext'

export function CoffeeDelivery() {
  const { cartList, updateProductQuantity, removeProduct } =
    useContext(DeliveryContext)
  let totalDelivery = 0
  const deliveryAmount = 3.9

  return (
    <DeliveryContainer>
      <>
        {cartList.map((coffee: ProductProps) => {
          totalDelivery = totalDelivery + Number(coffee.amount) * coffee.count

          return (
            <CoffeeCard key={coffee.description}>
              <div className="Info">
                <img src={coffee.image} alt="Expresso Tradicional" />
                <div className="Details">
                  <span>{coffee.title}</span>
                  <div className="Actions">
                    <div>
                      <button
                        onClick={() => {
                          const DecrementArguments = {
                            coffeTitle: coffee.title,
                            increment: coffee.count - 1,
                            type: 'incrementCart',
                          }
                          updateProductQuantity(DecrementArguments)
                        }}
                      >
                        -
                      </button>
                      <span>{coffee.count}</span>
                      <button
                        onClick={() => {
                          const IncrementArguments = {
                            coffeTitle: coffee.title,
                            increment: coffee.count + 1,
                            type: 'incrementCart',
                          }
                          updateProductQuantity(IncrementArguments)
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        removeProduct(coffee.title)
                      }}
                    >
                      <Trash color="#8047FB" />
                      <span>REMOVER</span>
                    </button>
                  </div>
                </div>
              </div>
              <p>{formatPrice(Number(coffee.amount) * coffee.count)}</p>
            </CoffeeCard>
          )
        })}
      </>

      <PriceContainer>
        <div>
          <p>Total de itens</p>
          <p>{formatPrice(totalDelivery)}</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>{formatPrice(deliveryAmount)}</p>
        </div>
        <div className="totalContent">
          <p>Total</p>
          <p>
            {totalDelivery > 0
              ? formatPrice(totalDelivery + deliveryAmount)
              : formatPrice(0)}
          </p>
        </div>
      </PriceContainer>
    </DeliveryContainer>
  )
}
