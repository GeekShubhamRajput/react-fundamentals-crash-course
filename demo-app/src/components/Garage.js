import { CarBrand } from './CarBrand';

export const Garage = () => {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];

  return(
    <div>
      { cars.map((carObj) => <CarBrand key={carObj.id} brand={carObj.brand} />)}
    </div>
  )
}
