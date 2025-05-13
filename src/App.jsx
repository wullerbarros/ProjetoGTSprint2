import Carrinho from "./components/Carrinho"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App (){
  return(
    <>
    <Header/>
    <main className="h-full">
      <Carrinho/>
    </main>
    <Footer/>
    </>
  )
}
export default App