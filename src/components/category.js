import { Col, Row } from "react-bootstrap"

const Category = () => {
    return(
        <Row>
            <Col sm="12">
                <div className="btns">
                    <button className="btnz">Break Fast</button>
                    <button className="btnz">Lunch</button>
                    <button className="btnz">Dinner</button>
                </div>
            </Col>
        </Row>
    )
}

export default Category