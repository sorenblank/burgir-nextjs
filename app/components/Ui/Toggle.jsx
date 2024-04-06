const Toggle = ({clicked, onClick}) => {
  return (
    <button className="grid gap-[4px] cursor-pointer lg:hidden" onClick={onClick}>
        <span className="w-[10px] h-[3px] bg-black rounded-[5px]"
                style={{transition:'0.25s ease', transform: clicked ? 'translate(1px, 3px) rotate(45deg)' : 'none'}}/>
        <span className="w-[20px] h-[3px] bg-black rounded-[5px]"
                style={{transition:'0.25s ease', transform: clicked ? 'rotate(-45deg)' : 'none' }}/>
        <span className="w-[10px] h-[3px] bg-black rounded-[5px] ml-auto" 
                style={{transition:'0.25s ease', transform: clicked ? 'translate(-1px, -3px) rotate(45deg)' : 'none'}}/>
    </button>
  )
}

export default Toggle

// transform: clicked ? 'translate(1px, 3px) rotate(45deg)' : 'none'
// transform: clicked ? 'rotate(-45deg)' : 'none'
// transform: clicked ? 'translate(-1px, -3px) rotate(45deg)' : 'none'