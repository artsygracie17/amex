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

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
`

const Name = styled.p`
    border-bottom: ${props => props.isCurrentCharacter ? '1px solid black' : 'none'};
    color: ${props => props.isCurrentCharacter ? 'black' : 'gray'};
    font-size: 1.2rem;
    padding-bottom: 0.3em;
    text-align: center;
    vertical-align: middle;

    &:hover {
        color: black;
        cursor: pointer;
        border-bottom: 1px solid black;
    }
`

const Theme = styled(Grid)`
    font-family: 'NeueHaasUnicaPro-Regular';
    padding: 5rem;
    padding-top: 1rem;
`

const EmptyState = styled.p`
    font-size: 1.2rem;
    margin: 5rem;
`

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            selectedCharacter: '',
            status: 'SETTLED'
        }
    }

    handleCharacterNameClick = (name, reqUrl) => {
        this.setState({
            films: [],
            selectedCharacter: name,
            status: 'PENDING'
        })
        this.fetchFilms(reqUrl)
        
    }

    async fetchFilms (reqUrl) {
        fetch(reqUrl)
        .then(res => {
            if (!res.ok) {
                this.setState({
                    status: 'SETTLED'
                })
                throw Error(res.status)
            } else {
                return res.json()
            }
        })
        .then(data => {
            const filmUrls = data.films
            filmUrls && filmUrls.map(url => {
                fetch(url)
                .then(res => res.json())
                .then(filmData => {
                    this.setState({
                        films: [...this.state.films, filmData],
                        status: 'SETTLED'
                    })
                })
            })
        }).catch(error => {
            console.log(error)
        })
    }
    
    render () {
        // console.log('data: ', data.characters)
        const { handleCharacterNameClick } = this
        const { films, status, selectedCharacter } = this.state
        return (
            <Container>
                <Theme>
                    <Title> characters and films </Title>
                    <Row start='xs'>
                    { data.characters.map((char, i) => {
                        return (
                            <Col key={i} xs={12} sm={6} md={3}>
                                <Name 
                                    isCurrentCharacter={char.name===selectedCharacter}
                                    onClick={() => handleCharacterNameClick(char.name, char.url)}>
                                    {char.name} 
                                </Name>    
                            </Col>
                        )
                    })}
                    </Row>
                    <Row start='xs'>
                        <Col xsOffset={1}>
                        { films.length > 0
                        ? status==='SETTLED' && films.map((film, i) => {
                            return (
                                <Row key={i}>
                                    <Col>
                                        <ResultCard
                                            film={film}
                                        />
                                    </Col>
                                </Row>
                            )
                        })
                        : status==='SETTLED' && selectedCharacter &&
                            <Row>
                                <Col>
                                    <EmptyState> Sorry, there is an error or this character is not in any films. </EmptyState> 
                                </Col>
                            </Row>
                        }
                        </Col>
                    </Row>
                </Theme>
            </Container>
        )
    }
}
