import React, { Component } from 'react'
import Header from './Header'


const Joke = (props) => {

    const { setup, punchline } = props.joke
    return (
        <div>

            <p>{setup}<em>{punchline}</em></p>
        </div>
    )

}




class Jokes extends Component {

    state = { Joke: {}, Jokes: [] }


    componentDidMount() {

        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ Joke: json }))
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ Jokes: json }))
    }

    render() {

        return (
            <div>
                <Header />
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.Joke} />
                <hr />
                <h3>Want more jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!!</button>
                {
                    this.state.Jokes.map((joke) => {
                        return (
                            <Joke key={joke.id} joke={joke} />


                        )
                    })}
            </div>
        )
    }
}
export default Jokes