
export function Logo({ className, width=20, height, ...props}) {
  return <svg viewBox="0 0 120 100" width={width}
     height={height || width/1.2} className={className} {...props}
       stroke="currentColor"
       fill="currentColor"
       xmlns="http://www.w3.org/2000/svg"
     >
    <path
     d="m 10,10 v 11.522153 l 8.9864,6.936422 v -0.01931 L 59.99042,60.0963 100.99444,28.439268 v 0.01931 l 8.9864,-6.955689 V 10 L 59.99042,48.651256 v 0 0 z m 0,22.986515 V 55.953762 83.063588 L 18.9864,90 V 62.890174 51.425823 l 33.9337,26.184966 v 0 l 7.07032,5.452799 7.07032,-5.452799 v 0 l 33.95287,-26.184966 v 0 L 110,44.470133 V 32.986515 L 99.04005,41.445085 59.99042,71.63777 34.41081,51.849708 19.00556,39.922927 Z M 110,55.953762 V 83.063588 L 101.01361,90 V 62.890174 Z"
/>
</svg>;
}
