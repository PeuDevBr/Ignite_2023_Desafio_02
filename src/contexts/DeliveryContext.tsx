import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { coffeeList } from '../util/list'
import { cartReducer } from '../reducers/cart/reducer'
import { ActionTypes } from '../reducers/cart/actions'

export interface ProductProps {
  amount: string
  count: number
  description: string
  image: string
  title: string
  types: Array<string>
}

interface UpdateProductQuantityProps {
  coffeTitle: string
  increment: number
  type: string
}

/* interface DeliveryContextType {
  // cartList: CartListProps | undefined
  productList: {} // CartListProps
  addProductToCartList: (coffee: CartListProps) => void
  updateProductQuantity: (coffeTitle: string, increment: number) => void
} */

export const DeliveryContext = createContext({} as any)

interface DeliveryContextProviderProps {
  children: ReactNode
}

export function DeliveryContextProvider({
  children,
}: DeliveryContextProviderProps) {
  const [cartList, dispatch] = useReducer(cartReducer, [], () => {
    const storedCartListJSON = localStorage.getItem(
      '@ignite-coffee-delivery:cart-list-1.0.0',
    )

    if (storedCartListJSON) {
      return JSON.parse(storedCartListJSON)
    }
  })

  useEffect(() => {
    const cartJSON = JSON.stringify(cartList)

    localStorage.setItem('@ignite-coffee-delivery:cart-list-1.0.0', cartJSON)
  }, [cartList])

  const [productList, setProductList] = useState(coffeeList)
  const [deliveryData, setDeliveryData] = useState<{} | null>(null)

  function addProductToCartList(coffee: ProductProps) {
    // percorre a lista de cart e retorna o índece do produto que tenha o título igual ao do café
    // caso não encontre retorna o valor -1
    const currentCoffeeIndex = cartList.findIndex((product: ProductProps) => {
      return product.title === coffee.title
    })

    if (currentCoffeeIndex >= 0) {
      // se o índece for >= 0 quer dizer que o produto existe no carrinho
      dispatch({
        type: ActionTypes.UPDATE_PRODUCT_QUANTITY_IN_HOME_TO_CART_LIST,
        payload: {
          coffee,
          currentCoffeeIndex,
        },
      })
    } else {
      // se o index retornado valor menor que 0 quer dizer que o café não existe no carrinho
      dispatch({
        type: ActionTypes.ADD_PRODUCT_IN_CART_LIST,
        payload: {
          coffee,
        },
      })
    }
  }

  function updateProductQuantity({
    coffeTitle,
    increment,
    type,
  }: UpdateProductQuantityProps) {
    if (type === 'incrementCart') {
      dispatch({
        type: ActionTypes.UPDATE_PRODUCT_QUANTITY_IN_CART_LIST,
        payload: {
          coffeTitle,
          increment,
        },
      })
    } else if (type === 'incrementProduct') {
      const updateProduct = productList.map((coffee) =>
        coffee.title === coffeTitle
          ? {
              ...coffee,
              count:
                increment < 1
                  ? 1 // não permite a quantidade do item ser menor que 1
                  : increment,
            }
          : coffee,
      )

      setProductList(updateProduct)
    }
  }

  function removeProduct(coffeTitle: string) {
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT_IN_CART_LIST,
      payload: {
        coffeTitle,
      },
    })
  }

  function resetCartList() {
    dispatch({
      type: ActionTypes.RESET_CART_LIST,
      payload: {
        data: [],
      },
    })
  }

  function createDeliveryData(data: any) {
    setDeliveryData(data)
  }

  return (
    <DeliveryContext.Provider
      value={{
        cartList,
        productList,
        deliveryData,
        addProductToCartList,
        updateProductQuantity,
        removeProduct,
        resetCartList,
        createDeliveryData,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
