import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/useCart";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <GlobalStyle />
          <Routes/>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
