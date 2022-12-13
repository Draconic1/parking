import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import {setParkings} from "./reducerSlice";
import authHeader from "../services/auth-header";

const Component = () => {
    const apiBase = useSelector((state) => state.toolkit.apiBase);
    const parkings = useSelector((state) => state.toolkit.parkings);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.toolkit.isLoggedIn);

    useEffect(() => {
        axios.get(`${apiBase}/parkings`, {headers: authHeader()}).then((resp) => {
            dispatch(setParkings(resp.data));
        });
    }, [apiBase, dispatch]);

    return (
        <>
            <h1>Доступные парковки</h1>
            <Row>
                {parkings &&
                    parkings.map((x) => (
                        <Col key={x.id} md="4" xl="3">
                            <Card style={{width: "100%"}}>
                                <Card.Body>
                                    <Card.Img variant="top" src={`${x.image}`} style={{width: "100%", height: 180}}/>
                                    <Card.Text>Свободных мест: {x.freePlaces}</Card.Text>
                                    <Card.Text>Всего мест: {x.parkingPlaces}</Card.Text>
                                    <Card.Text>Расположение: {x.address}</Card.Text>
                                    <ButtonGroup>
                                        <Button
                                            variant="outline-primary"
                                            as={Link}
                                            to={`info/${x.id}`}
                                        >
                                            О расположении
                                        </Button>
                                        {isLoggedIn && (
                                        <Button variant="primary" as={Link} to={`order/${x.id}`}>
                                            Получить место
                                        </Button>)}
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                {!parkings && (
                    <>
                        <h3>В данный момент нет парковок</h3>
                        <p>Если вы администратор - добавьте их</p>
                    </>
                )}
            </Row>
        </>
    );
};

export default Component;
