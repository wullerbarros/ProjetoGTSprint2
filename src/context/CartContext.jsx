import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [count, setCount] = useState(1)

    function addToCart() {
        setCount((count) => count + 1)
    }
    function removeFromCart() {
        setCount((count) => count - 1)
    }
    function removeItem() {
        setCount(0)
    }
    return (
        <>

            <CartContext.Provider value={{count, addToCart, removeFromCart, removeItem}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

