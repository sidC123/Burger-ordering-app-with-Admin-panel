import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addBurger } from '../actions/burgerActions';
import ErrorComponent from '../components/ErrorComponent';
import Loader from '../components/LoaderComponent';
import SuccessComponent from '../components/SuccessComponent';

const AddBurger = () => {

  const [name, setName] = useState('');
  const [smallPrice, setSmallPrice] = useState('');
  const [largePrice, setLargePrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addBurgerState = useSelector(state=>state.addBurgerReducer);
  const { loading, success, error } = addBurgerState;

  function formHandler(e){
    e.preventDefault();

    const burger= {
      name,
      image,
      description,
      category,
      prices:{
        small : smallPrice,
        large : largePrice
      }
    }
    console.log(burger);
    dispatch(addBurger(burger))
  }

  return (
    <>
      <Container>

        {loading && (<Loader/>)}
        {error && (<ErrorComponent error="Something went wrong" />)}
        {success && (<SuccessComponent success="New Burger added successfully" />)}

        <Form className='shadow-lg pt-2' onSubmit={formHandler}>
          <h4 className='mb-4'> Add new burger details </h4>
          <Row className='justify-content-center m-2'>

            <Form.Group as={Row} className="mb-3 ms-md-5 justify-content-center" >
              <Form.Label column sm="2" className='text-start' >
                Name :
              </Form.Label>
              <Col sm="8" className='ms-auto me-auto'>
                <Form.Control type='text' placeholder='Enter new burger name' value={name} onChange={(e) => setName(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 ms-md-5">
              <Form.Label column sm="2" className='text-start vertical-align-middle'>
                Small variant price:
              </Form.Label>
              <Col sm="8" className='ms-auto me-auto'>
                <Form.Control type="text" placeholder="Enter small variant price" value={smallPrice} onChange={(e) => setSmallPrice(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 ms-md-5">
              <Form.Label column sm="2" className='text-start'>
                Large variant price:
              </Form.Label>
              <Col sm="8" className='ms-auto me-auto'>
                <Form.Control type="text" placeholder="Enter large variant price" value={largePrice} onChange={(e) => setLargePrice(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 ms-md-5">
              <Form.Label column sm="2" className='text-start'>
                Image url:
              </Form.Label>
              <Col sm="8" className='ms-auto me-auto'>
                <Form.Control type="text" placeholder="Enter image url" value={image} onChange={(e) => setImage(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 ms-md-5">
              <Form.Label column sm="2" className='text-start'>
                Description:
              </Form.Label>
              <Col sm="8" className='ms-auto me-auto'>
                <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 ms-md-5">
              <Form.Label column sm="2" className='text-start'>
                Category:
              </Form.Label>
              <Col sm="8" className='ms-auto me-auto'>
                <Form.Control type="text" placeholder="Enter small variant price" value={category} onChange={(e) => setCategory(e.target.value)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 ms-auto me-auto ">
              <Col sm="2" className='ms-auto me-auto'>
                <Button type='submit' className='btn' style={{fontFamily:"Acme", fontSize:20}}> Add burger </Button>
              </Col>
            </Form.Group>

          </Row>
        </Form>
      </Container>
      
    </>
  )
}

export default AddBurger