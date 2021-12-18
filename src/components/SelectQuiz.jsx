import HomeBtn from "./HomeBtn";

const SelectQuiz = () => {
  const choicesArr = [25, 50, 100, 400, "All"];

  return (
    <>
      <HomeBtn />
      <div className='w-50' style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
        <h1>Choose a length for the Quiz</h1>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {choicesArr.map((choice, index) => (
            <button key={index} style={{ cursor: 'pointer', padding: '10px', borderRadius: '15px', margin: '10px 0' }} >{choice}</button>
          ))}
        </div>
      </div>
    </>
  )
}
export default SelectQuiz;