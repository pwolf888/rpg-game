import React from 'react';
const dialogue = {
    introductions: {
        Human: {
            Knight: "Good day.",
            Rogue: "Good day.",
            Wizard: "Good day."
        },
        Elf: {
            Knight: "Greetings.",
            Rogue: "Greetings.",
            Wizard: "Greetings."
        },
        Dwarf: {
            Knight: "Alright there Pal.",
            Rogue: "Alright there Pal.",
            Wizard: "Alright there Pal."
        },
        Halfling: {
            Knight: "Top of the morning..",
            Rogue: "Top of the morning..",
            Wizard: "Top of the morning.."
        }
    },
    idle: {
        Human: {
            Knight: "I must make my King proud",
            Rogue: "Anyone got any food",
            Wizard: "I could be studying more magic.."
        },
        Elf: {
            Knight: "I must make my King proud",
            Rogue: "Anyone got any food",
            Wizard: "I could be studying more magic.."
        },
        Dwarf: {
            Knight: "I must make my King proud",
            Rogue: "Anyone got any food",
            Wizard: "I could be studying more magic.."
        },
        Halfling: {
            Knight: "I must make my King proud",
            Rogue: "Anyone got any food",
            Wizard: "I could be studying more magic.."
        }
    }
}


class LogEntry extends React.Component {
    constructor(props){
        super(props); 
        this.state={
           
        }
    
    }

    componentDidMount(){
        this.setState({log: this.generateLog()})
        
    }

    generateLog() {

        var log = [];
        
        this
            .props
            .characters
            .map((character, index) => {
                var intro = {
                    name: character.name,
                    race: character.race,
                    dialogue: dialogue.introductions[character.race][character.class]
                }
                
                log.push(intro);
            });

            return log;
    }
    


    render() {

        return (

            <div>

                {this.state.log && this.state.log.map((entry, index)=>
                <div key={index} className="d-flex justify-content-between">
                    <h3>{entry.name}</h3>
                    
                    <div>{entry.dialogue}</div>
                </div>    
                )}
    
            </div>
    
        );
    }
   
}
export default LogEntry;