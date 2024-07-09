export function Card({ image, title, description, buttonText, className, children, ...props}) {
  return  <div  className="primary flex flex-col md:flex-row w-full max-h-full overflow-hidden" {...props}>
      <div className="w-full md:w-1/2 max-h-full relative p-4 flex justify-center">
        <img src={image} alt={title} className="rounded-xl shadow-xl" />
      </div>
      <div className="flex flex-col md:justify-end md:self-end p-8 h-full md:w-1/2">
          <h3>{title}</h3>
          <blockquote><p>{description}</p></blockquote>
      </div>
    </div>
    ;

}
