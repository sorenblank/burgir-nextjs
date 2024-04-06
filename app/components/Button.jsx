const Button = ({className, children, orange}) => {
  return (
    <button className={`rounded-[6px] px-[35px] font-rubik block ${orange ? 'bg-n-darkOrange' : 'bg-n-orange'} overflow-hidden relative z-[1] text-white text-[14px] h-[45px] text-medium hover:[--scale:500] ${className ? className : ''}`}
            style={{transition:'0.25s ease'}}>
        {children}
        <div 
            className="absolute -bottom-[1px] left-[20px] w-[1px] h-[1px] rounded-[50%] bg-black z-[-1]"
            style={{transform: 'translate(-50%, 51%) scale(var(--scale, 1))', transition: '0.5s ease'}}
        />
    </button>
  )
}

export default Button;