import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterCard from './components/CharacterCard';
const data = {
    names: [
        "Jeff", "Dingo", "Jones", "Corntent"
    ],
    races: [
        "Human", "Elf", "Dwarf", "Halfling"
    ],
    classes: [
        "Knight",
        "Ranger",
        "Cleric",
        "Rogue",
        "Wizard",
        "Warlock"
    ],
    bonus: {
        Human: {
            bravery: 2,
            reflex: 2,
            wisdom: 2
        },
        Elf: {
            bravery: 1,
            reflex: 3,
            wisdom: 3
        },
        Dwarf: {
            bravery: 4,
            reflex: -3,
            wisdom: 0
        },
        Halfling: {
            bravery: -3,
            reflex: 6,
            wisdom: 0
        }
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            showCharacters: false
        }

    }
    // Generate an int between 1 and 20
    roll20() {
        return Math.floor(Math.random() * 20) + 1;
    }
    // Generate Name, Race, Class between 1 and the length of the array passed
    rollStats(length) {
        return Math.floor(Math.random() * length);
    }

    // Generate the 4 characters of the party
    makeCharacter() {
        var characters = [];
        for (var i = 0; i < 4; i++) {
            var race = data.races[this.rollStats(data.races.length)];
            var stats = {
                name: data.names[this.rollStats(data.names.length)],
                race: race,
                class: data.classes[this.rollStats(data.classes.length)],
                bravery: this.roll20() + data.bonus[race].bravery,
                reflex: this.roll20() + data.bonus[race].reflex,
                wisdom: this.roll20() + data.bonus[race].wisdom
            };

            characters.push(stats);

        }

        return characters;

    }

    generateCharacters() {
        this.setState({
            characters: this.makeCharacter(),
            showCharacters: !this.state.showCharacters
        });
    }

    render() {
        return <div className="container p-3">
            <div className="row">
                {!this.state.showCharacters
                    ? <div
                            className="btn btn-primary"
                            onClick={this
                            .generateCharacters
                            .bind(this)}>Generate Characters</div>
                    : this
                        .state
                        .characters
                        .map((character, index) => (<CharacterCard key={index} stats={character}/>))
}
            </div>
        </div>

    }
}

export default App;
