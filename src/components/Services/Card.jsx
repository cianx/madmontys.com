export function Card({ image, title, description, buttonText, className, children, ...props}) {
  return <div className={`${className} w-full md:w-auto flex flex-col rounded-2xl bg-[#ffffff] shadow-xl`} {...props}>
      <figure className="flex justify-center items-center rounded-2xl">
          <img src={image} alt={title} className="rounded-t-2xl" />
      </figure>
    <div className="flex flex-col p-8">
      {children}
    </div>
</div>;

}
