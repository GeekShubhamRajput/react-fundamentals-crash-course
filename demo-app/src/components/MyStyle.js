export const MyStyle = () =>{
  const primary = {
    fontSize: '42px',
    color: 'orange',
  }

  return(
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Inline CSS</h1>
      <h2 style={primary}> Inline CSS using Object</h2>
      <h3 className='textBlue'>CSS stylesheet</h3>
    </>
  )
}
