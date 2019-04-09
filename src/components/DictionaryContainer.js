import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
require('dotenv').config()

const config ={
   apiKey: process.env.REACT_APP_DARI_API_KEY,
   authDomain: process.env.REACT_APP_DARI_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_DARI_DATABASE_URL,
   projectId: process.env.REACT_APP_DARI_PROJECT_ID,
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
    let input = givenTerm.replace(/\s+/g," ")
    let result = input.match(/[A-Za-z]/g)
    if(result !== null){
        translateDari(input.trim().toLowerCase())
      }
    else{
        translateEnglish(input.trim().toLowerCase())
    }
  }

  handleChange=(e)=>{
    this.setState({givenInput:e.target.value})
  }

  render() {

    return (
      <div>
       <div className="dictionary-buttons-container">
        <button className="btn" onClick={()=>this.handleClick(this.state.givenInput,"toDari")}>Translate</button>

       </div>

       <div className="input-container">
       <h2 className="input-label">Enter Text English or Dari</h2>
        <input className="inputform" value={this.state.givenInput} name="givenInput" onChange={this.handleChange}/>
       </div>
       <div className="input-container">
       <h2 className="output-label">Translation</h2>
        <input className="outputform"  id="translation" readOnly={true}/>
       </div>
      </div>
    );
  }

}

export default DictionaryContainer;

function translateDari(englishTerm){
  console.log(englishTerm)
  // firebase.database().ref('englishwords/'+englishTerm).set({
  //   translation: `${givenDari}`
  // });

    firebase.database().ref('/englishwords/' + englishTerm).once('value').then(function(snapshot) {
      let termsGiven = snapshot.val()
    if(termsGiven){
      document.getElementById('translation').value=snapshot.val().translation
    }else{
      document.getElementById('translation').value="Sorry no translation available"
    }
    })
}

function translateEnglish(givenDari){
  // firebase.database().ref('englishwords/خدا حافظ').set({
  //   translation: `goodbye`
  // });
  firebase.database().ref('/englishwords/'+givenDari).once('value').then(function(snapshot) {
    let termsGiven = snapshot.val()
  if(termsGiven){
    document.getElementById('translation').value=snapshot.val().translation
  }else{
    document.getElementById('translation').value="Sorry no translation available"
  }
 });
}
