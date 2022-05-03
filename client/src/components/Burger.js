import React, { useState } from 'react';
import { Image, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const BurgerComponent = ({ burger }) => {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('small');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(addToCart(burger, quantity, variant));
  }

  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded'>
      <div onClick={handleShow}>
        <h1 className='headingSize20'> {burger.name} </h1>
        <Image alt='' src={burger.image} className="img-fluid" style={{ height: '280px', width: '280px' }}  fluid /> 
        {/* <img alt='' src={burger.image} className="img-fluid" style={{ height: '280px', width: '280px' }} /> */}
      </div>

      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>Sizes:</p>
          <select className='form-control' value={variant} onChange={(e) => { setVariant(e.target.value) }}>
            {burger.variants.map((variant) => {
              return <option value={variant}> {variant} </option>
            })}
          </select>
        </div>

        <div className='w-100 m-1'>
          <p>Quantity:</p>
          <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}> {i + 1} </option>
            })}
          </select>
        </div>

      </div>
      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h1 className='headingSize20 mt-2'>Price: Rs.{burger.prices[0][variant] * quantity}</h1>
        </div>
        <div className='m-1 w-100'>
          <button className='btn' onClick={addtocart}>ADD TO CART</button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title> {burger.name} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img alt='' src={burger.image} className='ms-5 img-fluid' style={{ height: '400px' }} />

          <h6>{burger.description}</h6>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}> CLOSE </button>
        </Modal.Footer>
      </Modal >

    </div>
  )
}

export default BurgerComponent;