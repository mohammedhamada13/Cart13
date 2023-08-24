import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slice/Products-slice';
import { Link } from 'react-router-dom';
import { addToCart } from '../rtk/slice/cart-slice';

const Products = () => {

    const products = useSelector((state) => state.products)
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    },[])



  return (
    <div className='container mt-5 wow bounceInUp p-5'>
      
        <div className='row'>
            {products.map((product) => (            
            
            <div className='col-6 col-md-3 mb-3'>

            <Card  className='text-center p-4 h-100' style={{height:"450px"}}>
      <Card.Img className='py-3' variant="top" src={product.image} alt={product.title} style={{height : "250px"}} />
      <Card.Body>
        <Card.Title className='mb-0'>{product.title.substring(0,12)}</Card.Title>
        <Card.Text>
        {product.price}
        </Card.Text>
        <Link className='btn btn-outline-dark' ariant="primary" onClick={() => dispatch(addToCart(product))}>Add To Cart</Link>
      </Card.Body>
    </Card>

            </div>))}


        </div>
      
    </div>
  )
}

export default Products
