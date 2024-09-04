import React from "react";
import { personalDetails } from "../Details";

function About() {
  return (
    <main className="container mt-10 md:mt-24 mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading transition-colors duration-200 md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-2xl py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>
    </main>
  );
}

export default About;
