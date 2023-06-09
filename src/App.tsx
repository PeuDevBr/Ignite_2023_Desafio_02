import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { DeliveryContextProvider } from './contexts/DeliveryContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <DeliveryContextProvider>
          <Router />
        </DeliveryContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
