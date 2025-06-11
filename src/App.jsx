//how to use the images from the assets.js file
//import the directory below
import { assets } from "./assets/assets";


function App() {
  

  return (
    <div className='text-red-700 text-3xl flex items-center justify-center min-h-screen'>
      <div>
          <div>
      {/* render it this way in your various components */}
              <img src={assets.agriconLogo} alt="agriCon"/>
          </div>
          <div>Welcome to Agricon</div>
          </div>
      </div>
  )
}


export default App;
