/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'

const colors = {
    lightCoffee: '#dfd9d3',
    coffee: '#bfb3a8',
    darkCoffee: '#907a67'
}
const ResultCardContainer = styled.div`
    width: 30rem;
    height: 3rem;
    margin: 2rem;
`
const ResultCardBody = styled.div`
    border-bottom: 1px solid lightgray;
    border-radius: 0.2rem;
    padding: 1rem;
    width: 100%;
    height: 100%;
    vertical-align: middle;
`

const IconCol = styled(Col)`
    color: black;
    margin-top: 0.5rem;
    margin-right: 0.3rem;
`

const Title = styled.h4`
    color: black;
    font-size: 1.3rem;
    font-weight: lighter;
    margin-top: 0.5rem;
    margin-bottom: 0rem;
    margin-left: 0.3rem;
`

const ReleaseDate = styled(Title)`
    font-size: 0.8rem;
    margin-left: 0.4rem;
    margin-bottom: 0rem;
`

export default class ResultCard extends React.Component {

    render () {
        const { film } = this.props
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const date = new Date(film.release_date)
        const year = date.getFullYear()
        const day = date.getDate()
        const month = months[date.getMonth()]
        const dayOfWeek = daysOfWeek[date.getDay()]
        const dateString = `${dayOfWeek}, ${month} ${day} ${year}`
        return (
            <ResultCardContainer>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <ResultCardBody> 
                    <Row>
                        <IconCol>
                            <i className='material-icons' style={{fontSize: 24}}>movie</i>
                        </IconCol>
                        <Col>
                            <Row>
                                <Title> {film.title} </Title>
                            </Row>
                            <Row>
                                <ReleaseDate> Release: {dateString} </ReleaseDate>
                            </Row>
                        </Col>
                    </Row>
                </ResultCardBody>
            </ResultCardContainer>
        )
    }
}

ResultCard.defaultProps = {
   film: {},
}

ResultCard.propTypes = {
    film: PropTypes.object,
}