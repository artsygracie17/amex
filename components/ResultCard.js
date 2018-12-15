/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'

const ResultCardContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 1rem;
`
const ResultCardBody = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 0.5rem;
    width: 100%;
`

const MarginedRow = styled(Row)`
    // margin-top: 0.5rem;
`

const Title = styled.h4`
    color: black;
    font-size: 1.3rem;
    font-weight: lighter;
    margin-top: 0.2rem;
    margin-bottom: 0rem;
    margin-left: 1rem;
`

const ReleaseDate = styled(Title)`
    color: gray;
    font-size: 0.8rem;
    margin-top: 0rem;
    margin-bottom: 0.6rem;
    margin-left: 3.7rem;
`

const Description = styled(ReleaseDate)`
    color: black;
    display: none;
    line-height: 1.5rem;
    font-size: 1rem;
    width: 40rem;
`

export default class ResultCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewDescription: true
        }
    }

    toggleDescription = () => {
        this.setState({
            viewDescription: !this.state.viewDescription
        })
    }

    render () {
        const { film } = this.props
        const { toggleDescription } = this
        const { viewDescription } = this.state
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
                        <Col>
                            <MarginedRow>
                                <i className='material-icons' style={{fontSize: 40}}>movie</i>
                                <Title> {film.title} </Title>
                            </MarginedRow>
                            <Row>
                                <ReleaseDate> Release: {dateString} </ReleaseDate>
                            </Row>
                            <Row>
                                <Description onClick={toggleDescription}>+ here</Description>
                                {/* { viewDescription && <Description> {film.opening_crawl} </Description> } */}
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