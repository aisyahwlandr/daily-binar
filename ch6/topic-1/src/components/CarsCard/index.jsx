import { Col, Card, Image } from "react-bootstrap";
import PropTypes from "prop-types";

const CarsCard = ({ car }) => {
    return (
        <Col md={4}>
            <Card>
                <Card.Header>{car?.name}</Card.Header>
                <Card.Body>
                    {car?.photo && (
                        <Image
                            src={car?.photo}
                            className="img-fluid"
                            rounded
                        />
                    )}

                    <div className={car?.photo && "mt-4"}>
                        <h5>{car?.name}</h5>
                        <h6>{car?.class?.name}</h6>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

CarsCard.propTypes = {
    car: PropTypes.object,
};

export default CarsCard;