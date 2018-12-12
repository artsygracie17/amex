/* First party */
import { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'

/* Third party */
import data from '../characters.json'
import ResultCard from '../components/ResultCard'

const Container = styled.div`
    margin: 0 auto;
`

const Header = styled.div`
    color: gray;    
    font-size: 2rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    text-align: center;
`

const Theme = styled(Grid)`
    font-family: 'NeueHaasUnicaPro-Regular';
`

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCharacter: ''
        }
    }
    
    render () {
        console.log('data: ', data.characters)
        return (
            <Container>
                <Theme>
                    <Row center='xs'>
                        <Col xs={6}>
                            <p> test characters</p>
                        </Col>
                    </Row>
                    <Row center='xs'>
                        { data.characters.map((char, i) => {
                            return (
                                <Col key={i}>
                                    <ResultCard
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Theme>
            </Container>
        )
    }
}
