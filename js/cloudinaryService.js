// ==============================================================================
// NISH TECHNOLOGIES — CLOUDINARY IMAGE & MEDIA MANAGEMENT SERVICE
// Cloud Name: eduwk9jq | Upload Preset: ml_default
// ==============================================================================

export const CLOUDINARY_CONFIG = {
  cloudName: 'eduwk9jq',
  uploadPreset: 'ml_default',
  apiUrl: 'https://api.cloudinary.com/v1_1/eduwk9jq/image/upload'
};

/**
 * Upload an image file directly to Cloudinary using unsigned upload preset
 * @param {File} file - The file object from <input type="file"> or drag-and-drop
 * @param {Function} onProgress - Optional callback for upload progress (0-100)
 * @returns {Promise<{url: string, secure_url: string, public_id: string, width: number, height: number, format: string, bytes: number}>}
 */
export async function uploadImageToCloudinary(file, onProgress = null) {
  if (!file) throw new Error('No file provided for upload.');

  // Validate file type
  if (!file.type.startsWith('image/')) {
    throw new Error('Only image files (JPG, PNG, WebP, SVG, GIF) are supported.');
  }

  // Max size 10MB
  if (file.size > 10 * 1024 * 1024) {
    throw new Error('File size exceeds the 10MB limit.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
  formData.append('folder', 'nish_technologies');

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', CLOUDINARY_CONFIG.apiUrl);

    if (onProgress && xhr.upload) {
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          onProgress(percent);
        }
      };
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          resolve({
            url: response.url,
            secure_url: response.secure_url,
            public_id: response.public_id,
            width: response.width,
            height: response.height,
            format: response.format,
            bytes: response.bytes,
            created_at: response.created_at,
            thumbnail_url: getOptimizedThumbnail(response.public_id, 300, 200)
          });
        } catch (e) {
          reject(new Error('Failed to parse Cloudinary response: ' + e.message));
        }
      } else {
        try {
          const errRes = JSON.parse(xhr.responseText);
          reject(new Error(errRes.error?.message || 'Cloudinary upload failed.'));
        } catch {
          reject(new Error(`Upload failed with status code ${xhr.status}.`));
        }
      }
    };

    xhr.onerror = () => {
      reject(new Error('Network error during Cloudinary image upload.'));
    };

    xhr.send(formData);
  });
}

/**
 * Generate an optimized transformation URL from Cloudinary
 * @param {string} publicId - The Cloudinary asset public ID
 * @param {number} width - Target width
 * @param {number} height - Target height
 * @param {string} crop - Crop mode ('fill', 'scale', 'thumb', etc.)
 * @returns {string} Optimized image URL
 */
export function getOptimizedThumbnail(publicId, width = 400, height = 250, crop = 'fill') {
  if (!publicId) return '';
  if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
    // If it's already a full URL
    return publicId;
  }
  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/w_${width},h_${height},c_${crop},q_auto,f_auto/${publicId}`;
}
