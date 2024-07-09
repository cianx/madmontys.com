import { IoLogoInstagram } from "react-icons/io5";

export function InstagramLink({ children, className,  iconSize="64", ...props }) {
  return (
    <a href="https://www.instagram.com/cianmontgomery" target="_blank" rel="noopener noreferrer" className={`btn ${className}`} {...props}>
      <div className="flex flex-row flex-wrap md:flex-nowrap icon">
        <IoLogoInstagram size={iconSize} className="mx-4" />
        {children}
      </div>
    </a>
  );
}
