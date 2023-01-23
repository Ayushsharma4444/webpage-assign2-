import React from 'react'
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import Data  from './Data';


export const Allproducts = () => {
  return (
    <div className='product_container'>
        {Data.map((item)=>{
            return(
                <div className='box' key={item.id}>
                    <div className='image'>
                        <img src={item.img}/>
                       
                    </div>
                    <div className='details'>
                        <div>
                             <span>{item.title}</span>
                        </div>
                        <div className='price_detail'> 
                            <div>
                            <small>₹{item.price}</small>
                            <small style={{fontSize:'12px', margin:'5px 0 0 0'}}>{item.total_price}</small>
                            <small style={{color:'green', fontSize:'12px'}}>({item.discount}% Off)</small>
                            </div>
                            <div><MdOutlineAddShoppingCart color='white' /></div>
                        </div>

                        
                    </div>
                </div>
            )
        })}
     </div>
  )
}
