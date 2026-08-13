const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
const API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const MAX_SIZE_MB = 5;


/**
 * Uploads a profile photo to Cloudinary using a Signed Upload.
 * Returns the optimized secure_url with face-aware crop transformations.
 */
export async function uploadProfilePhoto(file) {
  // Validate file type
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error('Invalid file type. Please upload a JPG, PNG, or WebP image.');
  }

  // Validate file size
  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    throw new Error(`File too large. Maximum size is ${MAX_SIZE_MB}MB.`);
  }

  const timestamp = Math.round(new Date().getTime() / 1000);
  
  const strToSign = `folder=profile_photos&timestamp=${timestamp}${API_SECRET}`;
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(strToSign);
  const hashBuffer = await crypto.subtle.digest('SHA-1', encodedData);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const newSignature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  const signedFormData = new FormData();
  signedFormData.append('file', file);
  signedFormData.append('api_key', API_KEY);
  signedFormData.append('timestamp', timestamp);
  signedFormData.append('folder', 'profile_photos');
  signedFormData.append('signature', newSignature);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: 'POST', body: signedFormData }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.error?.message || 'Failed to upload image. Please try again.');
  }

  const data = await response.json();
  
  // Apply face-aware crop transformation via URL manipulation
  // Original: https://res.cloudinary.com/vsacademy/image/upload/v123/profile_photos/abc.jpg
  // Transformed: https://res.cloudinary.com/vsacademy/image/upload/w_400,h_400,c_fill,g_face,q_auto,f_auto/v123/profile_photos/abc.jpg
  const baseUrl = data.secure_url;
  const transformed = baseUrl.replace(
    '/image/upload/',
    '/image/upload/w_400,h_400,c_fill,g_face,q_auto,f_auto/'
  );

  return {
    url: transformed,
    originalUrl: baseUrl,
    publicId: data.public_id,
  };
}

/**
 * Get optimized thumbnail URL from a Cloudinary URL.
 */
export function getProfileThumbnail(url, size = 80) {
  if (!url) return null;
  return url.replace(
    '/image/upload/',
    `/image/upload/w_${size},h_${size},c_fill,g_face,q_auto,f_auto/`
  );
}
