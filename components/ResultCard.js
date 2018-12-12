/* Third Party */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from 'react'

const ResultCardContainer = styled.div`
    width: 15rem;
    height: 15rem;
    margin: 2rem;
`

const ResultCardBody = styled.div`
    background-color: beige;
    border-radius: 0.2rem;
    padding: 3rem;
    position: absolute;
`

const Title = styled.h4`
    color: gray;
    font-size: 2rem;
    text-align: center;
`

const ReleaseDate = styled(Title)`
    font-size: 1rem;
`

export default class ResultCard extends React.Component {

    render () {
        // const { film } = this.props
        return (
            <ResultCardContainer>
                <ResultCardBody> 
                    <Title>Test Title</Title>
                    <ReleaseDate> Test Release Date</ReleaseDate>
                </ResultCardBody>
            </ResultCardContainer>
        )
    }
}

ResultCard.defaultProps = {
   film: {}
}

ResultCard.propTypes = {
    film: PropTypes.object,
}