
import React from 'react';
import { assets } from '../../assets/assets';
import Card from './Card'
import { motion } from 'framer-motion'


function OurService() {
    return (
        <div className='px-5 py-15 bg-[#F7F7F7] sm:px-15' id='services'>
            <motion.div
                className='text-center space-y-6 mb-8'
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{duration: 1, delay: 0.5}}
            >
                <h6 className='font-bold text-[#02402D]'>Our Services</h6>
                <h1 className='text-2xl font-bold'>What Agric<span className='text-[#FFAC00]'>o</span>n Offers</h1>
            </motion.div>
            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{duration: 1, delay: 0.8}}
            >
                        <Card
                            image={<img src={assets.logistics} className='mx-auto bg-[#ECBD4629] rounded-full p-3'/>}  
                            name="Efficient Logistics" 
                            desc='We handle delivery to cut delays, protect your goods, and help you earn more.'
                        /> 
                         <Card
                            image={<img src={assets.sharedInfra} className='mx-auto bg-[#8FBFFA3D] rounded-full p-3'/>}  
                            name="Shared Infrastructure" 
                            desc='From rural villages to peri urban markets, We drives usage of assets via cooperative booking.'
                        /> 
                         <Card
                            image={<img src={assets.protectProduce} className='mx-auto bg-[#0000001A] rounded-full p-3'/>}  
                            name="Protect Your Produce" 
                            desc=' We connects smallholder farmers to affordable storage, drying, and processing units to preserve more.'
                        /> 
                         <Card
                            image={<img src={assets.smartSales} className='mx-auto bg-[#4147D51A] rounded-full p-3'/>}  
                            name="Smarter Sales" 
                            desc={<p className='px-2'>Make informed decisions using   AI-driven pricing data and trend forecasts tailored to your region.</p>}
                        /> 
            </motion.div>
        </div>
    )
}

export default OurService;