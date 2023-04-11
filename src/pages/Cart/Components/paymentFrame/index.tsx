import { ButtonContainer, PaymentContainer, PaymentContent } from './styles'

import { CreditCard, Bank, Money, CurrencyDollar } from 'phosphor-react'

export function PaymentFrame({ paymentForm, setPaymentForm }: any) {
  const handleButtonSelect = (payment: string) => {
    setPaymentForm(payment)
  }
  return (
    <PaymentContainer>
      <PaymentContent>
        <CurrencyDollar color="#8047FB" />
        <div>
          <span>Pagamento</span>
          <span>
            O pagamento é feitto na entrega. Escolha a forma que deseja pagar.
          </span>
        </div>
      </PaymentContent>
      <ButtonContainer>
        <button
          className={paymentForm === 'creditCard' ? 'selected' : ''}
          onClick={() => handleButtonSelect('creditCard')}
        >
          <CreditCard color="#8047FB" />
          <span>CARTÃO DE CRÉDITO</span>
        </button>
        <button
          className={paymentForm === 'debitCard' ? 'selected' : ''}
          onClick={() => handleButtonSelect('debitCard')}
        >
          <Bank color="#8047FB" />
          <span>CARTÃO DE DÉBITO</span>
        </button>
        <button
          className={paymentForm === 'money' ? 'selected' : ''}
          onClick={() => handleButtonSelect('money')}
        >
          <Money color="#8047FB" />
          <span>DINHEIRO</span>
        </button>
      </ButtonContainer>
    </PaymentContainer>
  )
}
