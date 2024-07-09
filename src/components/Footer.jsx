import { Logo } from "./Logo";
import { Footer as FbFooter } from "flowbite-react";
import { InstagramLink, MailLink } from "./links/index.jsx";

export function Footer() {
  return (
    <div  className="primary">
      <div className="body-column container">
        <FbFooter container className="primary">
            <Logo width="77" height={64} className="text-background-500 border-2 border-transparent ml-4 mb-4 mr-8"/>
            <InstagramLink iconSize="64" className="no-border m-0 leading-[64px]">
                 Instagram 
            </InstagramLink>
            <MailLink iconSize="64" className="no-border text-nowrap leading-[64px]">
                 <span>Contact Us</span>
            </MailLink>
          <FbFooter.Copyright
            by="Mad Monty™"
            year={2024}
            className="text-background-700 mb-4"
          />
        </FbFooter>
      </div>
    </div>
  );
}
