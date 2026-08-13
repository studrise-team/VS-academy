import crypto from 'crypto';

async function testUpload() {
  const CLOUD_NAME = 'dkcpci9ve';
  const API_KEY = '953465785118179';
  const API_SECRET = '54RftbQtq4jrczSQ2QacPP31bvw';

  const timestamp = Math.round(new Date().getTime() / 1000);
  const strToSign = `folder=profile_photos&timestamp=${timestamp}${API_SECRET}`;
  
  const signature = crypto.createHash('sha1').update(strToSign).digest('hex');
  
  const buffer = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "base64");
  const blob = new Blob([buffer], { type: 'image/png' });
  
  const formData = new FormData();
  formData.append('file', blob, 'test.png');
  formData.append('api_key', API_KEY);
  formData.append('timestamp', timestamp);
  formData.append('folder', 'profile_photos');
  formData.append('signature', signature);

  console.log("Uploading to cloudinary...");
  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  console.log(data);
}

testUpload().catch(console.error);
