import Image from 'next/image';

const Img = ({ alt = '', ...props }) => {
  return (
    <Image
      unoptimized={true}
      alt={alt}
      {...props}
    />
  );
};

export default Img;