const EventHandler = () => {
  function clickHandler(event, count=1){
    console.log('Clicked on button', count, event)
  }

  return(
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  )
}

export default EventHandler
