/* First party */
import { Component } from 'react'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'

/* Third party */
import data from '../characters.json'
import ResultCard from '../components/ResultCard'

const colors = {
    coffee: '#bfb3a8',
    darkCoffee: '#907a67'
}

const Container = styled.div`
    margin: 0 auto;
`

const CharacterCard = styled.div`
    border: 1px solid ${colors.coffee};
    border-radius: 10rem;
    height: 5rem;
    margin-top: 2rem;
    padding: 2rem;
    text-align: center;
    vertical-align: middle;
    width: 5rem;

    &:hover {
        color: ${colors.darkCoffee};
        cursor: pointer;
    }
`

const Name = styled.p`
    color: ${colors.coffee};
    font-size: 1.2rem;
    margin-top: 1.2rem;

    ${CharacterCard}:hover & {
        color: ${colors.darkCoffee};
    }
`

const Theme = styled(Grid)`
    font-family: 'NeueHaasUnicaPro-Regular';
`

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCharacter: '',
            films: []
        }
    }

    handleCharacterCardClick = (name, reqUrl) => {
        this.setState({
            films: [],
            selectedCharacter: name
        })
        this.fetchFilms(reqUrl)
        
    }

    async fetchFilms (reqUrl) {
        fetch(reqUrl)
        .then(res => res.json())
        .then(data => {
            const filmUrls = data.films
            filmUrls && filmUrls.map(url => {
                fetch(url)
                .then(res => res.json())
                .then(filmData => {
                    this.setState({
                        films: [...this.state.films, filmData]
                    })
                })
            })
        })
    }
    
    render () {
        // console.log('data: ', data.characters)
        const { handleCharacterCardClick } = this
        return (
            <Container>
                <Theme>
                    <Row center='xs'>
                        <Col xs={3}>
                            <Row>
                            { data.characters.map((char, i) => {
                                return (
                                    <Col key={i}>
                                        <CharacterCard onClick={() => handleCharacterCardClick(char.name, char.url)}>
                                            <Name> {char.name} </Name>
                                        </CharacterCard>
                                            
                                    </Col>
                                )
                            })}
                            </Row>
                        </Col>
                        <Col xs={9}>
                            <Row>
                                { data.characters.map((char, i) => {
                                    return (
                                        <Col key={i}>
                                            <ResultCard/>
                                                
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Theme>
            </Container>
        )
    }
}
