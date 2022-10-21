const Button = ({color, handleClick , text}) => {
    return (<button
     style= {{background:color}}
     className="btn"
     onClick={handleClick}
     >
        {text}
        
     </button>)
}
 
export default Button;