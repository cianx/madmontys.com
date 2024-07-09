import { Section } from "../Section";
import { Card } from "./Card";
import { Carousel } from "flowbite-react";
import image1 from "../../assets/train-4.jpg";
import image2 from "../../assets/train-5.jpg";
import image3 from "../../assets/train-6.jpg";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <h1>Testimonials</h1>
       <div className="h-auto md:h-72 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        <Card image={image1} title="John Doe" description="I'm very happy with the results" />
        <Card image={image2} title="John Doe" description="I'm very happy with the results" />
        <Card image={image3} title="John Doe" description="I'm very happy with the results" />
      </Carousel>
    </div> 
    </Section>
  );
}
