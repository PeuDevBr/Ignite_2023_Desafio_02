import { useState } from 'react'
import { CoffeeDelivery } from './Components/coffeeDelivery'
import { FormFrame } from './Components/formFrame'
import { PaymentFrame } from './Components/paymentFrame'

export function Cart() {
  const [paymentForm, setPaymentForm] = useState('inexistente')
  return (
    <>
      <div>
        <h3>Complete seu pedido</h3>
        <FormFrame paymentForm={paymentForm} />
        <PaymentFrame
          paymentForm={paymentForm}
          setPaymentForm={setPaymentForm}
        />
        <CoffeeDelivery />
      </div>
    </>
  )
}
