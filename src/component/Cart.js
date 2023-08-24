import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clear, deleteFromCart } from '../rtk/slice/cart-slice';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totlePrice = cart.reduce((acc , product) => {
        acc += product.price * product.quantity;
        return acc;
    },0)
  return (
    <div className='container mt-3  text-center wow bounceInUp  ' >
        <h3 className='text-center mb-3 '>Welcome to Cart</h3>
        <h4 className='btn btn-outline-info mb-4' onClick={() => dispatch(clear())}>clear</h4>
        <h5>Totil : {totlePrice.toFixed(2)} $</h5>
        <div className='row'>
            <div className='col-md-12 col-12'  > 
            <Table   striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>img</th>
          <th> pricr</th>
          <th> quantity</th>
          <th> actions</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (        
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>
            <img src={product.image} alt={product.title} height='100px' width='100px'  />
          </td>
          <td>@{product.price}</td>
          <td>{product.quantity}</td>
          <td>
            <button className='btn btn-outline-danger' onClick={() => dispatch(deleteFromCart(product))}>Delete</button>
          </td>
        </tr>))}

      </tbody>
    </Table>
            </div>

        </div>

    </div>
  )
}

export default Cart
