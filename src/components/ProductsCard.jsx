import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils";


function ProductsCard({ rasm, narx, title, alt }) {
  return (
    <div>
      <div className="card w-[390px] shadow-xl hover:shadow-2xl transition duration-300">
        
          <figure className="px-4 pt-4">
            <img
              src={rasm}
              alt="{alt}"
              className="rounded-xl h-64 md:h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider">{title}</h2>
            <span className="text-primary">{formatPrice(narx)}</span>
          </div>
        
      </div>
    </div>
  );
}

export default ProductsCard;



