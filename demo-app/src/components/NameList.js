export const NameList = () => {
  const userNames = ['Clark', 'Bruce', 'Herry']

  return(
    <div>
      { userNames.map((name) => <h1 key={name}> {name} </h1>) }
    </div>
  )
}
