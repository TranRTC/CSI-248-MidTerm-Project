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
            <div className="container">

                <p>"She <strong><em>(pronoun)</em></strong> quickly <strong><em>(adverb)</em></strong> grabbed <strong><em>(verb)</em></strong> the <strong><em>(article)</em></strong> 
                    delicious <strong><em>(adjective)</em></strong> chocolate <strong><em>(noun)</em></strong> chip <strong><em>(noun)</em></strong> cookie <strong><em>(noun)</em></strong>
                    from <strong><em>(preposition)</em></strong> the <strong><em>(article)</em></strong> jar <strong><em>(noun)</em></strong> on <strong><em>(preposition)</em></strong>
                    the <strong><em>(article)</em></strong> kitchen <strong><em>(noun)</em></strong> counter <strong><em>(noun)</em></strong>."
                </p>
                
            </div>           
            
            <container>

                <h2>Select</h2>                
                <select className="form-select border border-primary text-danger " id="PartsOfSpeech" value={select} onChange={handleSelectChange}>
                        <option>Parts of Speech</option>
                        {
                            partsOfSpeech.map((part, index) => (

                                <option key={index} value={part}>{part}</option>
                            )

                            )

                        }
                </select>
                <br></br>
                </container>           
           
        </div>
     );
}

export default SelectLesson;