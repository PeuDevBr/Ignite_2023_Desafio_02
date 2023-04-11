import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import {
  FormContainer,
  FormContent,
  TitleContainer,
  NumberContent,
  CityContent,
} from './styles'

import { MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { DeliveryContext } from '../../../../contexts/DeliveryContext'

interface NewDeliveryFormData {
  zipCode: string
  adress: string
  number: number
  complement: string
  district: string
  city: string
  state: string
}

export function FormFrame({ paymentForm }: any) {
  const history = useNavigate()
  const { cartList, resetCartList, createDeliveryData } =
    useContext(DeliveryContext)
  const isDisabled = paymentForm === 'inexistente' || cartList.length === 0
  const { register, handleSubmit, reset } = useForm<NewDeliveryFormData>({
    defaultValues: {
      zipCode: '',
      adress: '',
      number: 0,
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })

  function handleCreateNewDelivery(data: NewDeliveryFormData) {
    createDeliveryData({
      ...data,
      paymentForm,
    })
    history('/success') // redereciona para a página de conclusão de pedido
    resetCartList([]) // reseta a lista de produtos no carrinho

    reset() // reseta os dados do formulário
  }

  return (
    <FormContainer>
      <TitleContainer>
        <MapPinLine size={22} color="#C47F17" weight="thin" />
        <div>
          <p className="title">Endereço de Entrega</p>
          <p className="description">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </TitleContainer>

      <form onSubmit={handleSubmit(handleCreateNewDelivery)} action="">
        <FormContent>
          <input
            className="zipCode"
            placeholder="CEP"
            type="number"
            {...register('zipCode')}
            required
          />
          <input
            className="street"
            placeholder="Rua"
            {...register('adress')}
            required
          />

          <NumberContent>
            <input
              className="number"
              type="number"
              placeholder="Número"
              {...register('number', { valueAsNumber: true })}
              required
            />
            <input
              className="complement"
              type="text"
              placeholder="Completemtar                                                  Opcional"
              {...register('complement')}
            />
          </NumberContent>

          <CityContent>
            <input
              className="district"
              type="text"
              placeholder="Bairro"
              {...register('district')}
              required
            />
            <input
              className="city"
              type="text"
              placeholder="Cidade"
              {...register('city')}
              required
            />
            <input
              className="state"
              type="text"
              placeholder="UF"
              {...register('state')}
              required
            />
          </CityContent>

          <button className="confirmationButton" disabled={isDisabled}>
            CONFIRMAR PEDIDO
          </button>
        </FormContent>
      </form>
    </FormContainer>
  )
}
