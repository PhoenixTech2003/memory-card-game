import './App.css'
import { useEffect,useState } from 'react'
import shuffleArray from './shuffle';
import fetchDetails from './data';


alert('Welcome to Memory Card! The objective of the game is simple: select cards that you have not chosen before and keep going. Good luck!');
function Header({scores}){
  return(
    


    <header className='w-screen bg-slate-950 text-white text-center flex flex-col items-center gap-5 p-10 sm:flex-row justify-between fixed' >
      <h1 className='font-bold'>MEMORY CARD GAME</h1>
      <div className='flex flex-col gap-6 sm:flex-row'>
        <div className='bg-slate-50 text-slate-950 px-7 py-1 rounded-lg'>
          <p>Score : {scores.curScore}</p>
        </div>

        <div className='bg-slate-50 text-slate-950 px-7 py-1 rounded-lg'>
            <p>High Score: {scores.highScore}</p>
        </div>
      </div>
    </header>


  
    

    
  )
}



function ImageContainer({cards, click}){
    
    let listItems = cards.map((card) =>{
      

        return (
          <button className='flex flex-col items-center justify-center border-solid border-slate-950 border-4 p-2 rounded-xl sm:hover:animate-pulse ' key={card.id}  onClick={click}>

            <img  src={card.img_src} id={card.id} alt="" />
            <p className='font-bold'>{card.title}</p>

          </button>
          
          )

      
      
    })

    
    
  

  
    return(
      <div className='grid grid-cols-2 gap-4 justify-center content-center p-3 sm:grid-cols-5 '>
      
      {listItems}
      
      </div>
    )

  
}

function App() {
  const [cards, setCards] = useState([]);
  const [scores, setScores] = useState({curScore:0,highScore:0, selected:[]})


  useEffect(()=>{
    let results = fetchDetails();
    results.then((result)=>{
      
        setCards(result)        
      })
    },[])

    function test(e){
      
      setCards(()=>{
        let shuffle = shuffleArray([...cards])
        return shuffle;
      });

      if ( scores.selected.includes(e.target.id)){

          setScores({
            ...scores,
            curScore: 0,
            selected: []
          })
      }


      if(!(scores.selected.includes(e.target.id)) && scores.curScore === scores.highScore){
        
        setScores({
          curScore: scores.curScore + 1,
          highScore: scores.highScore +1,
          selected: [...scores.selected, e.target.id]


        }
        )
      }
      
      if(!(scores.selected.includes(e.target.id)) && scores.curScore < scores.highScore){
        setScores({
          ...scores,
          curScore: scores.curScore + 1,
          selected: [...scores.selected, e.target.id]

        })
      }


      
    }
    
    if(cards.length === 0){
      return(
        <>
        
            <Header scores={scores}/>
            <div className='h-52 sm:h-32'></div>
            <div className='grid justify-center content-center'>
            
                <div className='bg-slate-950 p-10 animate-bounce text-white text-center font-bold rounded-md'>Memory <br /> card</div>
            
            </div>
        
        </>

        
      )
    }else{
      return (
        <>
        <Header scores={scores}/>
        <div className='h-52 sm:h-32'></div>
        <ImageContainer cards={cards} click={test} />
      </>
    )


    }
    
   
}

export default App;
