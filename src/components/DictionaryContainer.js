import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
require('dotenv').config()

const config ={
   apiKey: process.env.REACT_APP_DARI_API_KEY,
   authDomain: process.env.REACT_APP_DARI_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_DARI_DATABASE_URL,
   projectId: process.env.REACT_APP_DARI_PROJECT_ID,
   storageBucket: process.env.REACT_APP_DARI_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_DARI_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)

class DictionaryContainer extends Component {
  state={
    english: true,
    isReadOnly: false,
    givenInput: ''
  }

  handleClick=(givenTerm,language)=>{
    if(language==="toDari"){
      translateDari(givenTerm)
    }else if(language==="toEnglish"){
      translateEnglish(givenTerm)
    }
  }

  handleChange=(e)=>{
    this.setState({givenInput:e.target.value})
  }

  render() {

    return (
      <div>
       <div className="dictionary-buttons-container">
        <button className="btn" onClick={()=>this.handleClick(this.state.givenInput,"toDari")}>Translate To Dari</button>
        <button className="btn" onClick={()=>this.handleClick(this.state.givenInput,"toEnglish")}>Translate To English</button>
       </div>

       <div className="input-container">
       <h2 className="input-label">Your Text</h2>
        <textarea className="inputform" value={this.state.givenInput} name="givenInput" onChange={this.handleChange}/>
       </div>
       <div className="input-container">
       <h2 className="output-label">Translation</h2>
        <textarea className="outputform" readOnly={true} id="translation"/>
       </div>
      </div>
    );
  }

}

export default DictionaryContainer;

function translateDari(givenTerm){
  console.log(process.env.REACT_APP_DARI_API_KEY, 'API KEY')
  firebase.database().ref("daridictionary/").set({
    word: "HELLO",
    dari: `${givenTerm}`
  })

}

function translateEnglish(givenTerm){

}
