import Image from 'next/image';
import Head from 'next/head';
export default function Profile() {
    return ( <>
    <Head>
    <title>Profile</title>
  </Head>
  
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={400} // Desired size with correct aspect ratio
    width={400} // Desired size with correct aspect ratio
    alt="Your Name"
    
  />
  </>
  )
}
