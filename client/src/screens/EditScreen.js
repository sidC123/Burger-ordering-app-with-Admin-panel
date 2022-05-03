import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getBurgerById, updateBurger } from '../actions/burgerActions';
import ErrorComponent from '../components/ErrorComponent';
import Loader from '../components/LoaderComponent';
import SuccessComponent from '../components/SuccessComponent';

const EditScreen = () => {

    const [name, setName] = useState('');
    const [smallPrice, setSmallPrice] = useState('');
    const [largePrice, setLargePrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const { burgerId } = useParams();
    console.log(burgerId);

    const dispatch = useDispatch();

    const burgerByIdState = useSelector(state => state.getBurgerByIdReducer);
    const { loading, burger, error } = burgerByIdState;

    const updateBurgerState = useSelector(state=> state.updateBurgerReducer);
    const { updateLoading, updateError, updateSuccess } = updateBurgerState;

    const navigate = useNavigate();

    function goBack(){
        navigate('/admin')
    }

    function formHandler(e) {
        e.preventDefault();

        const updatedBurger = {
            _id: burgerId,
            name,
            image,
            description,
            category,
            prices: {
                small: smallPrice,
                large: largePrice
            }
        }
        // console.log(updatedBurger);
        dispatch(updateBurger(updatedBurger))
    }

    useEffect(() => {

        if (burger) {
            if (burger._id == burgerId) {
                setName(burger.name)
                setCategory(burger.category)
                setImage(burger.image)
                setDescription(burger.description)
                setSmallPrice(burger.prices[0]['small'])
                setLargePrice(burger.prices[0]['large'])
            }
            else {
                dispatch(getBurgerById(burgerId))
            }
        }
        dispatch(getBurgerById(burgerId))
    }, [])

    return (
        <>
            <h3 className='bg-dark p-2 ms-5 me-5' style={{ color: "darkorange", fontFamily: 'Acme' }} >Update Burger details</h3>

            <Container>

                {loading && (<Loader />)}
                {error && (<ErrorComponent error="Something went wrong" />)}
                {updateLoading && (<Loader />)}
                {updateSuccess && (<SuccessComponent success="Burger details updated successfully" />)}

                <Form className='shadow-lg pt-2' onSubmit={formHandler}>
                    <Row className='justify-content-center m-2 p-2'>

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
                                <Button type='submit' className='btn m-1' style={{ fontFamily: "Acme", fontSize: 20 }}> Update details </Button>
                                <Button onClick={goBack} className='btn m-1' style={{ fontFamily: "Acme", fontSize: 20 }}> Go back </Button>
                            </Col>
                        </Form.Group>

                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default EditScreen;