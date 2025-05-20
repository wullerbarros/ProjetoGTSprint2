import { createContext, useEffect,useState } from "react"
import axios from "axios"

const ProductsContext = createContext()


const ProductsProvider = ({children}) => {
  const [produtos, setProdutos] = useState([])

useEffect(()=>{
  axios.get('https://api-produtos-5ncj.onrender.com/produtos')
  .then(data => 
      setProdutos(data.data)
  )
  .catch(err =>
    console.err("Erro ao buscar produtos",err)
  )
},[])
    return (
          <>
  
              <ProductsContext.Provider value={produtos}>
                  {children}
              </ProductsContext.Provider>
          </>
      )
  }
  export{ProductsContext, ProductsProvider}
    
  