import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";


function Cta() {
    return (
        <section
            className="
                relative flex items-center justify-center
                bg-[url(/cta.png)] bg-cover bg-center bg-no-repeat h-auto
            "
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative  text-center text-white lg:px-80">
                <div className="pt-20 pb-15">
                    <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-6 animate-fade-in-up">
                        Ready to Stop Losing Harvest to Spoilage?
                    </h1>
                    <p className="text-lg px-5 md:text-xl mb-15 animate-fade-in-up delay-200 ">
                        Join thousands of farmers already saving money and increasing their income
                    </p>
                    <Link to='/signup' className='hover:cursor-pointer bg-[#02402D] border border-[#FFAC00] rounded-full pl-5 py-3 font-bold'>
                        Start Saving Today <FaAngleRight className="inline-block bg-[#FFAC00] rounded-full text-black mb-1 ml-2 mr-1" size={38}/>
                    </Link>
                    
                </div>
            </div>
        </section>
    );
}
export default Cta;