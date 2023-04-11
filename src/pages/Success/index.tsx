import { useContext } from 'react'
import delivery from '../../assets/illustration.svg'
import { Icon } from './Components/icon'
import {
  OrderContainer,
  OrderContent,
  TextContent,
  SuccessContainer,
} from './styles'
import { DeliveryContext } from '../../contexts/DeliveryContext'

export function Success() {
  const { deliveryData } = useContext(DeliveryContext)

  function showPaymentForm() {
    switch (deliveryData.paymentForm) {
      case 'creditCard':
        return <span>Cartão de Crédito</span>

      case 'debitCard':
        return <span>Cartão de Débito</span>

      case 'money':
        return <span>Dinheiro</span>
    }
  }

  function showSuccess() {
    if (deliveryData != null) {
      return (
        <SuccessContainer>
          <TextContent>
            <p>Uhu! Pedido confirmado</p>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </TextContent>
          <OrderContainer>
            <div>
              <OrderContent>
                <div>
                  <Icon color="#8047F8" image="MapPin" />
                  <div>
                    <p>
                      Entregar em{' '}
                      <span>
                        {deliveryData.adress}, {deliveryData.number}
                      </span>
                    </p>
                    <p>
                      {deliveryData.district} - {deliveryData.city},{' '}
                      {deliveryData.state}
                    </p>
                  </div>
                </div>
                <div>
                  <Icon color="#DBAC2C" image="Timer" />
                  <div>
                    <p>Previsão de entrega</p>
                    <span>20 min - 30 min</span>
                  </div>
                </div>
                <div>
                  <Icon color="#C47F17" image="CurrencyDollar" />
                  <div>
                    <p>Pagamento na entrega</p>
                    {showPaymentForm()}
                  </div>
                </div>
              </OrderContent>
            </div>
            <img src={delivery} alt="" />
          </OrderContainer>
        </SuccessContainer>
      )
    } else {
      return (
        <SuccessContainer>
          <TextContent>
            <p>Wow! Pedido inexistente</p>
            <p>Volte e faça o seu pedido</p>
          </TextContent>
        </SuccessContainer>
      )
    }
  }
  return <>{showSuccess()}</>
}
