import cian1Url from "../assets/cian-1.jpg";
import { Section } from "./Section";
export function Team() {
  return (
    <Section id="team" className="reverse">
      <div className="container">
        <h1>Meet the Team</h1>
      </div>
      <div className="container pt-4">
        <h2>Cian Montgomery</h2>
        <div className="container flex flex-col md:flex-row md:flex-row-reverse gap-4">
          <img
            src={cian1Url}
            alt="Cian Montgomery"
            className="w-1/2 rounded-xl drop-shadow-xl"
          />
          <p>
            Cian Montgomery is a personal trainer with over 10 years of
            experience.
          </p>
        </div>
      </div>
      <div className="container pt-8">
        <h2>Mindy Montgomery</h2>
        <div className="container flex flex-col md:flex-row gap-4">
          <img
            src={cian1Url}
            alt="Mindy Montgomery"
            className="w-1/2 rounded-xl drop-shadow-xl"
          />
          <p>
            Cian Montgomery is a personal trainer with over 10 years of
            experience.
          </p>
        </div>
      </div>
    </Section>
  );
}
