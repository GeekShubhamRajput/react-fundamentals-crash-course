import { ChildComponent } from "./ChildComponent"

export const ParentComponent = () => {
  const parentHandler = () => {
    alert('Hello Parent')
  }
  return <ChildComponent greetHandler={parentHandler} />
}
