import React,{useState} from 'react';
import data from './data'
import {CopyToClipboard} from 'react-copy-to-clipboard'
function App() {
  const [count,setCount]=useState(0);
  const [text,setText]=useState([]);
  const [trolltext,setTrollText]=useState([]);

  
  const handleSubmit=(e)=>{

    e.preventDefault();
    
    let amount=parseInt(count);
    if(count<=0){
      amount=0;
    }
    else if(count>=data.length){
      amount=data.length;
    }

    setText(data.slice(0,amount));

    if(amount===0)
      setTrollText('So...you asked for no paragraphs?')
    else
      setTrollText('');

  }

  return (
    <>
    <section id="root-section">


    <h1>Better-ipsum</h1>


    <h3>because Lorem ipsum isn't enough</h3>


    <form onSubmit={handleSubmit}>

      <label htmlFor="amount">
        Paragraphs:
      </label>

      <input type="number" name="amount" id="amount"
        value={count}
        onChange={(e)=>{
          setCount(e.target.value);
        }}
      />

      <button type="submit" 
        className="btn"
        id="submit-btn"> 
        Generate!
      </button>


      

    </form>
      <CopyToClipboard text={text}>
      <button className="btn" id="copy-btn"> 
        Copy All
      </button>
      </CopyToClipboard> 

    
    <article id="text-article">

    {text.map((item,index)=>{
      return <p 
        key={index} 
        id="actual-text">
          {item}
      </p>
    })}

    <p id="troll-text">{trolltext}</p>
    </article>  


    </section>
    </>
  );
}

export default App;
