//how to use the images from the assets.js file
//import the directory below
import { assets } from './assets/assets';
import { CardDetails } from './components/payment Integration/CardDetails';
import { ErrorPage } from './components/payment Integration/ErrorPage';
import { OtpPage } from './components/payment Integration/OtpPage';
import { PaymentMethod } from './components/payment Integration/PaymentMethod';
import { Receipt } from './components/payment Integration/Receipt';
import { SuccessPage } from './components/payment Integration/successPage';

function App() {
	return (
		<div className='text-red-700 text-3xl flex items-center justify-center min-h-screen'>
			<div>
				<div>
					{/* render it this way in your various components */}
					<img
						src={assets.agriconLogo}
						alt='agriCon'
					/>
				</div>
				<div>Welcome to Agricon</div>
				{/* <PaymentMethod /> */}
				{/* <CardDetails /> */}
				{/* <OtpPage /> */}
				{/* <SuccessPage /> */}
				{/* <ErrorPage /> */}
				<Receipt />
			</div>
		</div>
	);
}

export default App;
