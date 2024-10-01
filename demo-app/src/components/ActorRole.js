const ActorRole = (props) => {
  return(
    <>
      <h2>Actor name is {props.name} aka {props.role}</h2>
      <p>{props.children}</p>
    </>
  )
}

export default ActorRole
