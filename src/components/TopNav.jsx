import { Button, Navbar } from "flowbite-react";
import { Logo } from "./Logo";

export function TopNav() {
  return (
    <div  className="primary">
      <div className="body-column container">
        <Navbar fluid rounded className="primary">
          <Navbar.Brand href="https://madmontys.com">
            <Logo width="64" className="text-background-500 mr-8"/>
            <span className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white">
              Mad Montys Personal Training
            </span>
          </Navbar.Brand>
          <Navbar.Collapse className="mt-4">
            <Navbar.Link href="#services">Services</Navbar.Link>
            <Navbar.Link className="text-primary-300" href="#team">
              Team
            </Navbar.Link>
            <Navbar.Link className="text-primary-300" href="#testimonials">
              Testimonials
            </Navbar.Link>
            <Navbar.Link className="text-primary-300" href="#contact">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
          <Navbar.Toggle />
        </Navbar>
      </div>
    </div>
  );
}
