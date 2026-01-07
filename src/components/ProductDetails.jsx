import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, formatPrice, generateAmountOptions } from "../utils";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const url = `products/${id}`;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["productDetails", url],
    queryFn: () => fetchData(url),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  const { image, title, price, description, colors, company } =
    data.data.attributes;

  const dollarsAmount = formatPrice(price);

  console.log(data);

  return (
    <section className="container-element">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    // className={`badge w-6 h-6 mr-2 ${
                    //   color === productColor && "border-2 border-secondary"
                    // }`}
                    // style={{ backgroundColor: color }}
                    // onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium -tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-primary select-bordered select-md"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          {/* CART BTN */}
          <div className="mt-10">
            <button className="btn btn-primary btn-md">Add to bag</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
