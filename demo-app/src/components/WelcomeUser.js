export const Welcome = () => {
  const isLoggedIn = false

  return(
    <>
      <h2>Welcome {isLoggedIn ? 'Shubham' : 'User'}</h2>
      <h2> {isLoggedIn && 'Welcome Shubham'}</h2>
    </>
  )
}
