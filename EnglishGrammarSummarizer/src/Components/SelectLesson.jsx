import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function SelectLesson({select, handleSelectChange}) {
         
   const partsOfSpeech = [

    'Noun',
    'Verb',
    'Adjective',
    'Adverb',
    'Pronoun',
    'Conjunction',
    'Preposition',
    'Interjection',
    'Article'
  ];
        

  
    return ( 
        <div className="container">
            <div>

                <br></br>
                <p className=" container text-secondary">
                    Parts of speech are the essential building blocks of language, 
                    categorizing words into distinct groups such as nouns,
                    verbs, adjectives, and more. Understanding and correctly using
                    parts of speech is crucial for clear and precise 
                    communication.
                </p>
                
            </div>           
            
            <div className="container">

                <h2>Select</h2>
                <label htmlFor="PartsOfSpeech">Topics of Grammar</label>                
                <select className="form-select border border-primary text-danger " id="PartsOfSpeech" value={select} onChange={handleSelectChange}>
                        <option>Parts of Speech</option>
                        {
                            partsOfSpeech.map((part, index) => (

                                <option key={index} value={part}>{part}</option>
                            )

                            )

                        }
                </select>
                
            </div>           
           
        </div>
     );
}

export default SelectLesson;