import { Card, Col, Container, Row } from 'react-bootstrap'

const Counter = () => {

  return (
    <Container>
        <Row xs={3} className='my-5 g-0 py-3'> 
            <Col className='text-center shadow-sm py-4'>
                <div>
                    
                        <h4>
                        203+
                        </h4>
                    
                    <div>
                        Factory
                    </div>
                </div>
            </Col>
            <Col className='text-center shadow-sm py-4'>
                <div>
                    
                        <h4>950K+</h4>
                    
                    <div>
                        Customer
                    </div>
                </div>
            </Col>
            <Col className='text-center shadow-sm py-4'>
                <div>
                    
                        <h4 className='text-center'>23+</h4>
                    
                    <div>
                        Country
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Counter