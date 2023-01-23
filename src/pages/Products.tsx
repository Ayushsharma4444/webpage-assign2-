import {GiSchoolBag} from 'react-icons/gi';
import {SlHandbag} from 'react-icons/sl';
import {GiDuffelBag} from 'react-icons/gi'
import {BsBagFill} from 'react-icons/Bs';
import {GiHandBag} from 'react-icons/gi';
import {GiShoulderBag} from 'react-icons/gi';
import {BiShoppingBag} from 'react-icons/bi';
import {BiExport} from 'react-icons/bi';
export const Products = () => {
  return (
    <>
    <div className="product_nav">
        <div className='item'>
            <li><GiSchoolBag color='white'/></li>
            <span>All bags</span>
        </div>
        <div className='item'>
            <li><SlHandbag color='white'/></li>
            <span>Vanity Pouch</span>
        </div>
        <div className='item'>
            <li><BsBagFill color='white'/></li>
            <span>Vanity Pouch</span>
        </div>
        <div className='item'>
            <li><GiDuffelBag color='white'/></li>
            <span>Vanity Pouch</span>
        </div>
        <div className='item'>
            <li><GiHandBag color='white'/></li>
            <span>Hand Bag</span>
        </div>
        <div className='item'>
        <li><GiShoulderBag color='white'/></li>
            <span>Slings Bag</span>
        </div>
        <div className='item'>
        <li><BiShoppingBag color='white'/></li>
            <span>Slings Bag</span>
        </div>
        
    </div>
    <div style={{display:'flex', justifyContent:'space-between' ,margin:'0 5rem 0 5rem'}}>
         <span style={{color:'white',fontWeight:'bold'}}>Bags - Backpacks</span>
         <span style={{color:'white',fontWeight:'bold' }}> 13 Product  <BiExport color='white'/></span>
    </div>
   </>
  )
}
