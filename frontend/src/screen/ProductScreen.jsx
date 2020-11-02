import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import {Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap"
import Rating from "../components/Rating"

import {useDispatch, useSelector} from "react-redux"
import {productListDetails} from "../actions/productActions.js"
import Loader from '../components/Loader';
import Message from "../components/Message"



const ProductScreen = ({match}) => {
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);

    const {loading, error, product} = productDetails

    useEffect(() => {
        dispatch(productListDetails(match.params.id))
    }, [dispatch, match]);
    
    return (
        <div>
            <Link className="btn btn-dark my-3" to="/">戻る</Link>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (

            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            料金 : {product.price}円
                        </ListGroup.Item>
                        <ListGroup.Item>
                            概要 : {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3} variant="flush">
                    <Card>

                    <ListGroup>
                        <ListGroup.Item>
                        <Row>
                            <Col>
                                金額: 
                            </Col>
                            <Col>
                                <strong>{product.price}円</strong> 
                            </Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Row>
                            <Col>
                                在庫: 
                            </Col>
                            <Col>
                                {product.countInStock > 0 ? "在庫あり" : "売り切れ"}
                            </Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                カートに追加
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Col>
            </Row>
            )}
        </div>
    )
}

export default ProductScreen
