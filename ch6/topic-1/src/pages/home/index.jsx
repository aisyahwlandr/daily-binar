import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";


const Home = () => {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getCars = async (token) => {
        setIsLoading(true);

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            // set cars by response
            setCars(data);
        } catch (error) {
            // because token is not valid, we will delete it from local storage
            setCars(null);
            localStorage.removeItem("token");
        }

        setIsLoading(false);
    };

    useEffect(() => {
        // get user cars if we have token
        const token = localStorage.getItem("token");
        if (token) {
            getCars(token);
        }
    }, []);

    return (
        <div>
            <h1>Car List</h1>
            <Row>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    cars.map((car) => (
                        <Col key={car.id} md={3}>
                            <Card style={{ marginBottom: '1rem' }}>
                                <Card.Img variant="top" src={car.photo} />
                                <Card.Body>
                                    <Card.Title>{car.name}</Card.Title>
                                    <Card.Text>Rent per day: Rp {car.rentperday}</Card.Text>
                                    <Card.Text>Car type: {car.cartype_id}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </div>
    );
};

export default Home