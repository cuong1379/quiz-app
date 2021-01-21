
import React, {useState, useEffect} from 'react';


const API_URL = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple'



function App() {

  const [question, setQuestion] = useState([{
    question: '',
    correct_answer: '',
    incorrect_answers: '',
  }
  ])

  useEffect(() => {
    fetch(API_URL).then(res=>res.json()).then(data=>{
      setQuestion(data.results)
      console.log(data.results)
    })
  }, [])

  const [currentQuestion, setCurrentQuestion] = useState(0)



  const [isHiden, setIsHidden] = useState(true)
  const [isWin, setIsWin] = useState(true)
  const [score, setScore] = useState(0)

  const handleChose = (valueChose) => {

    if(valueChose===question[currentQuestion].correct_answer){
      const newScore = score+1
      setScore(newScore)
      const nextQuestion = currentQuestion+1
      setCurrentQuestion(nextQuestion)
      if(nextQuestion<question.length){
      }else{
        setIsWin(false)
      }
    }else{
      setIsHidden(false)

  }
  }



  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
   
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
   
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
   
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
   
    return array;
  }



  var arrList = [ question[currentQuestion].correct_answer, question[currentQuestion].incorrect_answers[0], question[currentQuestion].incorrect_answers[1], question[currentQuestion].incorrect_answers[2]]

  var arr =  shuffle(arrList)
  console.log(arr)

   const playAgian = () => {
    setIsHidden(true)
   }

   const playAgianWin = () => {
    window.location.reload()
   }

  return (
    <>
      <div style={{  
          backgroundImage: 'url(https://www.teahub.io/photos/full/339-3390064_millionaire01-wants-to-be-a-millionaire-background.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          zIndexL :'-10'
        }}>
          <div className=' flex justify-center items-center h-screen' >
            <div className='max-w-lg mx-auto w-full'>
                    <div className='bg-gradient-to-r from-blue-300 via-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg text-2xl shadow-md mb-8'
                      dangerouslySetInnerHTML={{ __html: question[currentQuestion].question}}
                    >
                
                    </div>

                    <div className='sm:flex w-full'>

                    <div className='w-full'>
                  

                        <div className=' p-4 font-semibold  text-white  text-md shadow-md ' >
                          <button className='w-full  bg-blue-500 rounded-lg p-2 hover:bg-yellow-600 focus:purple-900 transform transition duration-500 hover:scale-x-110' onClick ={() => handleChose(arr[0])} >
                            { arr[0]}
                          </button>
                       </div> 

                     <div className=' p-4 font-semibold  text-white  text-md shadow-md ' >
                          <button className='w-full  bg-blue-500 rounded-lg p-2 hover:bg-yellow-600 focus:purple-900 transform transition duration-500 hover:scale-x-110' onClick ={() => handleChose(arr[1])} >
                          {arr[1]}
                          </button>
                       </div> 

                    </div>
        

                    <div className='w-full'>

                        <div className=' p-4 font-semibold  text-white  text-md shadow-md ' >
                          <button className='w-full  bg-blue-500 rounded-lg p-2 hover:bg-yellow-600 focus:purple-900 transform transition duration-500 hover:scale-x-110' onClick ={() => handleChose(arr[2])} >
                          {arr[2]}
                          </button>
                       </div> 

                     <div className=' p-4 font-semibold  text-white  text-md shadow-md ' >
                          <button className='w-full  bg-blue-500 rounded-lg p-2 hover:bg-yellow-600 focus:purple-900 transform transition duration-500 hover:scale-x-110' onClick ={() => handleChose(arr[3])} >
                          {arr[3]}
                          </button>
                       </div> 

                    </div>

                 

                    </div>
              </div>
                    <div className={isHiden ? 'hidden' : 'z-20 fixed bg-gradient-to-r from-blue-300 via-blue-500 to-purple-500 text-white p-24 rounded-lg text-2xl shadow-md '}>
                        Ba mẹ, tin mày <br/>
                        Em trai, tin mày <br/>
                        Luôn dõi theo từng bước chân mày<br/>
                        Niềm vinh quang tự hào của gia đình này<br/>
                        Thế đ* nào m có  {score} điểm ??? <br/>
                        <button className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg text-black p-2 mt-6' onClick={playAgian} >Chơi tiếp</button>
                    </div>

                    <div className={isWin ? 'hidden' : 'z-20 fixed bg-gradient-to-r from-blue-300 via-blue-500 to-purple-500 text-white p-24 rounded-lg text-2xl shadow-md '}>
                        Quá đẹp trai !!! <br/>
                        Ban có  {score} điểm ??? <br/>
                        <button className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg text-black p-2 mt-6' onClick={playAgianWin} >Chơi lại</button>
                    </div>
            </div>
       
       

      </div>
    </>
  );
}

export default App;
