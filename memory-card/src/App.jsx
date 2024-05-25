import './App.css'

function Header(){
  return(
    <header className='bg-slate-950 text-white text-center flex flex-col items-center gap-5 p-10 sm:flex-row justify-between' >
      <h1>MEMORY CARD GAME</h1>
      <div className='flex flex-col gap-6 sm:flex-row'>
        <div className='bg-slate-50 text-slate-950 px-7 py-1 rounded-lg'>
          <p>Score : 0</p>
        </div>

        <div className='bg-slate-50 text-slate-950 px-7 py-1 rounded-lg'>
            <p>High Score: 0</p>
        </div>
      </div>
    </header>

    
  )
}

function App() {


  return (
    <>
      <Header/>
    </>
  )
}

export default App
