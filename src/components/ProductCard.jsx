/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ProductCard({ id, title }) {
  return (
    <>
      <Link to={`/product/${id}`}>{title}</Link>
      <br></br>
    </>
  );
}
