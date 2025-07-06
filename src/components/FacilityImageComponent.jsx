import React, { useContext, useState } from 'react';
import { MdCancel, MdOutlineFileUpload } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { OperatorContext } from '../context/OperatorContext';

const  FacilityImageComponent = ({onSuccess}) => {
  const navigate = useNavigate();
  const { operatorData, setOperatorData, addFacility, uploadToCloudinary } = useContext(OperatorContext);
  const { dailyRate, description } = operatorData;
  const [isUploading, setIsUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false) // I am adding this, to handle sending rewuest to the backend, i was getting 429 error

  const handleSubmit = async () => {
    if(isSubmitting) return;
    setIsSubmitting(true)
    try {
      await addFacility(operatorData);
      onSuccess();
      // navigate('/facilitiessuccessfulpage');
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Failed to add facility. Check console for details.');
    }
    finally{
        setIsSubmitting(false);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const imageUrl = await uploadToCloudinary(file);
      console.log('Uploaded Image URL:', imageUrl);
      setOperatorData((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Image upload failed. Check console.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className='items-center flex justify-center'>
      <div className='flex flex-col md:gap-12 gap-4 bg-white md:w-[656px] w-[290px] md:p-8 p-3 rounded-lg'>
       

        <div>
          <div className='flex flex-col gap-4'>
            <label className='text-[16px]'>Daily Rate ($)</label>
            <input
              type='text'
              value={dailyRate}
              onChange={(e) => setOperatorData({ ...operatorData, dailyRate: e.target.value })}
              placeholder='5000'
              className='text-[#98A2B3CC] p-2 border rounded-lg'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <label className='text-[16px]'>Description</label>
            <textarea
              placeholder='Additional Details About Facility'
              value={description}
              onChange={(e) => setOperatorData({ ...operatorData, description: e.target.value })}
              className='text-[#98A2B3CC] p-2 border rounded-lg'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <label className='text-[16px]'>Add Image</label>

            <div className='relative h-44 w-full border rounded-lg flex flex-col justify-center items-center text-[#98A2B3] cursor-pointer'>
              <MdOutlineFileUpload className='md:text-5xl text-3xl text-[#02402d]' />
              <h1 className='text-[14px] font-semibold text-[#1a1a1a]'>Upload File</h1>
              <p className='text-[#98A2B3] text-[12px]'>File must be JPEG/PNG and not exceed 2MB</p>

              <button
                disabled={isUploading}
                className={`text-white bg-[#02402d] md:w-24 px-4 py-1 rounded-lg mt-2 ${isUploading && 'opacity-50 cursor-not-allowed'}`}
              >
                {isUploading ? 'Uploading...' : 'Upload'}
              </button>

              <input
                id='file-upload'
                type='file'
                accept='.jpg,.jpeg,.png'
                className='absolute inset-0 opacity-0 cursor-pointer'
                onChange={handleImageChange}
              />
            </div>
          </div>

          <button
            type='button'
            disabled={isSubmitting}
            onClick={{handleSubmit}}
            className='bg-[#02402d] mt-2 w-full cursor-pointer text-white py-2 rounded-lg'
          >
            Continue
          </button>
          {isSubmitting? 'Submitting..':''}
        </div>
      </div>
    </div>
  );
};

export default FacilityImageComponent;
