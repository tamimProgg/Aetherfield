const Button = ({ children, className = "", ...props }) => {
  return (
    <button className={`px-6 py-3 bg-black cursor-pointer font-sourceSerif4 ${className}`} {...props}>
      {children}
    </button>
  )
}
export default Button