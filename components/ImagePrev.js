// import Image from 'next/image';
// import { useState } from 'react';

// const ImagePrev = () => {
//   const [selectedImage, setSelectedImage] = useState();

//   const imageChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedImage(e.target.files[0]);
//     }
//   };

//   return (
//     <>
//       <div className='preve'>
//         <input accept="image/*" type="file"  onChange={imageChange} />

//         {selectedImage && (
//           <div>
//             <Image src={URL.createObjectURL(selectedImage)} alt="Thumb" layout='responsive' width="100%" height={100} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default ImagePrev

import Script from "next/script"

export default function ImagePrev() {
  return (
    <div>
      <Script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js" charset="utf-8"></Script>

      <input type="hidden" role="uploadcare-uploader" name="my_file" />
    </div>
  )
}
