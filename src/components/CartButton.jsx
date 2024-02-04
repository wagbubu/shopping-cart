/* eslint-disable react/prop-types */
export default function CartButton({handleClick}) {
  
  return (
    <>
      <button onClick={handleClick} className="btn btn-square btn-primary">Cart</button>
    </>
  );
}
