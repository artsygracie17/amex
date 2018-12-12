/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const colors = {
    lightCoffee: '#dfd9d3',
    coffee: '#bfb3a8',
    darkCoffee: '#907a67'
}
const ResultCardContainer = styled.div`
    width: 10rem;
    height: 10rem;
    margin: 2rem;
`
const ResultCardBody = styled.div`
    border: 1px solid lightgray;
    border-radius: 0.2rem;
    padding: 1rem;
    width: 100%;
    height: 100%;
    vertical-align: middle;
`

const Title = styled.h4`
    color: gray;
    font-size: 1.5rem;
    text-align: center;
`

const ReleaseDate = styled(Title)`
    font-size: 1rem;
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
                <ResultCardBody> 
                    <Title> {film.title} </Title>
                    <ReleaseDate> {dateString} </ReleaseDate>
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