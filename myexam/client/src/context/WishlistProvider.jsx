import React, { createContext, useState } from 'react'

export const WishlistContext = createContext(null)
export const WishlistProvider = ({children})=>{
  const [wishlist, setWishlist] = useState([]);
  const toggleWishlist = (product)=>{
    const idx = wishlist.findIndex((f)=> f._id === product._id)
    if(idx === -1){
      setWishlist([...wishlist, {...product}])
    }
    else{
      return setWishlist([...wishlist].filter((f)=> f._id != product._id))
    }

  }
  return (
    <WishlistContext.Provider value={{wishlist, toggleWishlist}}>
      {children}
  
    </WishlistContext.Provider>
  
  )
}



export default WishlistProvider
