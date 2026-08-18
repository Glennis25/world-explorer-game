export default function Button({ children, onClick, variant = 'primary', size = 'medium', className = '' }) {
  const baseStyles = 'font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95'
  
  const variantStyles = {
    primary: 'bg-primary text-white shadow-lg hover:shadow-xl hover:bg-red-500',
    secondary: 'bg-secondary text-white shadow-lg hover:shadow-xl hover:bg-teal-500',
    accent: 'bg-accent text-dark-blue shadow-lg hover:shadow-xl hover:bg-yellow-300',
    success: 'bg-success text-dark-blue shadow-lg hover:shadow-xl'
  }
  
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-xl'
  }
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  )
}
