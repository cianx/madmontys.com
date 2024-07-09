import { Section } from "../Section";
import { Logo } from "../Logo";
import { Card } from "./Card";
import { InstagramLink, MailLink } from "../links/index.jsx";
import image1 from "../../assets/train-1.jpg";
import image2 from "../../assets/train-2.jpg";
import image3 from "../../assets/train-3.jpg";

export function Services() {
  return (
    <div>
      <Section id="services" className="border-none">
        <h1>Services</h1>
        <div>
          <Logo className="absolute text-primary-500 opacity-20" width="300" />
          <InstagramLink className="primary w-2/5 float-right">
            <h3>
               Follow us on Instagram 
            </h3>
          </InstagramLink>
          At Mad Montys we offer comprehensiveAt Mad Montys, we offer
          comprehensive personal training services that are tailored to meet your
          individual fitness goals. Whether you're looking to lose weight, gain
          muscle, increase flexibility, or improve overall fitness, our certified
          personal trainers are here to guide and support you every step of the
          way. Our trainers develop personalized workout plans, provide
          nutritional advice, and offer motivation to ensure you achieve the
          results you desire. We believe in a holistic approach to fitness,
          focusing on both physical and mental well-being, and we are committed to
          helping you lead a healthier and more active lifestyle. With our
          personalized attention and expertise, you can achieve your fitness goals
          and unlock your full potential.
        </div>
      </Section>
      <Section className="bg-dark-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card image={image1} className="dark">
            <h2> One-on-One Training</h2>
            <p>
              Individual personal training involves one-on-one sessions with one of our personal trainers. During these sessions, you will workout 
              following a plan tailoried to your specific fitness goals. The trainer will provide guidance, support, and motivation to help you achieve your desired results.
            </p>
          </Card>
          <Card image={image2} className="dark">
            <h2> Small Group Training</h2>
            <div>
    We provide small group training sessions for groups of 2-4 individuals. These sessions offer a supportive and motivational environment where each participant receives personalized attention and guidance from the trainer. The trainer tailors the workouts to accommodate the specific fitness goals and needs of each participant. Group members can motivate and support each other while working towards their individual fitness objectives. Overall, small group training offers a more collaborative and social setting while still providing personalized fitness guidance.
            </div>
          </Card>
          <Card image={image3} className="dark">
            <h2>Custom Programming</h2>
            <p>
              Custom programming at Mad Montys involves creating personalized workout
              plans that are tailored to meet the unique fitness goals and
              requirements of each individual. Our certified personal trainers work
              closely with clients to design programs that address specific
              objectives, such as weight loss, muscle gain, flexibility improvement,
              or overall fitness enhancement. These customized plans take into account
              factors such as individual fitness levels, any existing health
              conditions, and personal preferences. 
             </p>
          </Card>
          <Card image={image3} className="dark">
            <h2>Custom Programming</h2>
            <p>
              Custom programming at Mad Montys involves creating personalized workout
              plans that are tailored to meet the unique fitness goals and
              requirements of each individual. Our certified personal trainers work
              closely with clients to design programs that address specific
              objectives, such as weight loss, muscle gain, flexibility improvement,
              or overall fitness enhancement. These customized plans take into account
              factors such as individual fitness levels, any existing health
              conditions, and personal preferences. 
             </p>
          </Card>
        </div>
      </Section>
      <Section id="contact" className="dark py-6">
        <h2>
           <MailLink className="bg-dark-300 float-right w-2/5">
                <h3>
                  Contact Us Today!
                </h3>
            </MailLink>
            Contact us today to get started on your fitness journey! We offer
            discounted rates for new clients, bonus sessions for referrals, and
            special packages for ongoing training.
          </h2>
      </Section>
    </div>
  );
}
