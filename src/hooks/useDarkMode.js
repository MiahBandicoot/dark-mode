
import UseLocalS from './useLocalStorage'

const useDarkMode = () => {
    
    const [darkMode, setDarkMode] = UseLocalS(true)
 
    return (
        [darkMode, setDarkMode]
    )

}
export default useDarkMode


// const useDarkMode = () => {
    
//     const [darkMode, setDarkMode] = UseLocalS(true)
//     useEffect(() => {
//         const body = window.document.body
//         if (darkMode){
//             body.classList.add('darkMode')
//         }
        
//     },[darkMode])
//     return (
//         [darkMode, setDarkMode]
//     )

// }
// export default useDarkMode