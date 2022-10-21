import Button from "./Button"

const Header = ({onShow, showAdd}) => {
    return (
        <header id='mm' className="header">
            <h1>Task Tracker</h1>
            <Button  color={showAdd ? 'rgb(240, 39, 39)' : 'green'} text={showAdd  ? 'Return' : 'Add'} handleClick ={onShow}/>
        </header>
    )
}
export default Header 































// //import App = from "../App"

// //anything can be used as parameter here, let's use bube as parameter
// //then use the parameter.nameofprop passed in the App.js file which here will be <bube.title>
// //3rd format we can also just put the name of the props inside a curly bracket and pass it as a parameter and just pass only the props name without using parameter.props method
// const Header = ({title}) => {
//     return (
//         <header>
//             <h1>{title}</h1> 
//         </header>
//     )
// }
// // Before you run the code below, make sure you have removed the prop passed-in in the App.js file, so Ebube go and remove the title props in the header inside the App.js, but leave the parameter and the method you have called here and then run the code below, it will give you the same result as when you passed the props in the App.js file
// // or when you have used the 3rd format i explained above
// Header.defaultProps = {
//     title: 'Task Tracker'
// }
// // Css in JavaScript(pass in this attribute, style={hstyle} inside the h1 tag element)
// /*const hstyle = {
//     color:'greenyellow',
//      backgroundColor:'silver'
// }*/



