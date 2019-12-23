import React from 'react';

const data = {
  names: ["Jeff", "Dingo", "Jones", "Corntent"],
  races: ["Human", "Elf", "Dwarf", "Halfling"],
  classes: ["Knight", "Ranger", "Cleric", "Rogue","Wizard","Warlock"]
   
 }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      showCharacters: false
    }
   

  }
  
  roll20() {
    return Math.floor(Math.random()*20) + 1;
  }

  rollStats(length) {
    return Math.floor(Math.random()*length);
  } 


  makeCharacter() {
    var characters = [];
    for(var i=0;i<4;i++){
      var stats = {
        name: data.names[this.rollStats(data.names.length)], 
        race: data.races[this.rollStats(data.races.length)],
        class: data.classes[this.rollStats(data.classes.length)],
        bravery: this.roll20(),
        reflex: this.roll20(),
        wisdom: this.roll20()
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
    return <div>
        {!this.state.showCharacters ? 
         <button onClick={this.generateCharacters.bind(this)}>Generate Characters</button> : 
        this.state.characters.map((character, index)=>(
          <div>
            <h1>{character.name}</h1>
            <h2>{character.race}</h2>
            <h3>{character.class}</h3>
            <p>{character.bravery}</p>
            <p>{character.reflex}</p>
            <p>{character.wisdom}</p>
          </div>
        ))
         
        }
      </div>;
  }
}

export default App;
