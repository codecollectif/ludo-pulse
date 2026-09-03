import { use } from "react";

import { getOrFetch } from "../helpers/cache";

function About() {
  const { message } = use(getOrFetch<{ message: string }>("/api/hello"));

  return (
    <>
      <h1>À propos</h1>
      <p>StartER rocks !</p>
      <p>Message de l'API : "{message}"</p>
    </>
  );
}

export default About;
