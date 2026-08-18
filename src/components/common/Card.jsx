export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  )
}
