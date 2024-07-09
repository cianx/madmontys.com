import { IoMailOutline } from "react-icons/io5";

export function MailLink({ children, className, iconSize=64, ...props }) {
  return (
    <a href="mailto:cian.montgomery@gmail.com" target="_blank" rel="noopener noreferrer" className={`btn ${className}`} {...props}>
      <div className="flex flex-row flex-wrap md:flex-nowrap icon">
        <IoMailOutline size={iconSize} className="inline-block mx-4 float-left" />
        {children}
      </div>
    </a>
  );
}

