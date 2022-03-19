import React, {Component} from 'react'

class Welcome extends Component{

    constructor(){
        super();
        this.state={count: 28}//j'initialise un objet state du composant
    }

     incrementer(){
         //je définis la methode setState qui va incrementer mon state 
       this.setState({
           count: this.state.count+1
       })
        }

    decrimenter(){
        this.setState({
            count: this.state.count-1
        })
    }
    alerter(){
            this.state.count<18? alert("vous etes mineur"): alert("vous etes adulte");
    }
        render(){

            return (
                <div>
                    <h1> salut c'est {this.props.name} , j'ai {this.state.count} ans</h1>
                    <button onClick={()=>this.incrementer()}>Ajouter 1</button>
                    <button onClick={()=>this.decrimenter()}>Enlever 1</button>
                    <button onClick={()=>this.alerter()}>etat</button>

                </div>
               
    
            )
        }
    }
    
export default Welcome;