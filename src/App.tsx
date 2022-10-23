import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/useCart";
import { PageRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <GlobalStyle />
          <PageRoutes/>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
