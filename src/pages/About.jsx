import React from "react";
import {Routes, Route} from 'react-router-dom'

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-32 text-center">
      <h1 className="text-5xl font-bold mb-8">
        We love{" "}
        <span className="bg-blue-600 text-white px-4 py-2 rounded-xl">
          comfy
        </span>
      </h1>
      <p className="max-w-3xl mx-auto text-slate-500 leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus. Perferendis
        ipsa cumque ipsam nostrum reprehenderit id illo sed officiis ea tempore!
      </p>
    </section>
  );
}
