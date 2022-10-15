function Button ({text, handleClick}) {
     return(
        <button type='button' className='max-w-[400px] border border-primary-purple hover:text-white hover:bg-primary-purple duration-500 rounded-md p-3 pr-[3rem] pl-[3rem] ' onClick={handleClick}>{text}</button>
     )
}

export default Button;