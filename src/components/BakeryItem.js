// TODO: create a component that displays a single bakery item



export default function BackeryItem({name, description, price, image, cart, setCart}) {
  function handleClick(){
    setCart(cart => [...cart, name]);
  }

	return (
		<div>
			<img src={image} alt=""></img>
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
      <button onClick={handleClick}>Add</button>
		</div>
	);
}