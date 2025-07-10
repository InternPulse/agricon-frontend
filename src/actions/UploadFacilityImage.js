// utils/uploadImage.js

export const UploadFacilityImage = async (file) => {

  const operatorId = localStorage.getItem('operatorId')
  if (!file) return null;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`https://agricon-express-backend.onrender.com/api/v1/facilities/${operatorId}/image`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Image upload failed');
    }

    const result = await response.json();
    return result.imageUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};
