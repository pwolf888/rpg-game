import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterCard from './components/CharacterCard';
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
    return <div className="container p-3"><div className="row">
        {!this.state.showCharacters ? 
         <div className="btn btn-primary" onClick={this.generateCharacters.bind(this)}>Generate Characters</div> : 
         
        this.state.characters.map((character, index)=>(
          <CharacterCard key={index} stats={character}/>
        ))
         
        }
        </div>
      </div>
    
  }
}

export default App;
