import partsImage from '../../assets/images/about_us/parts.jpg';
import personImage from '../../assets/images/about_us/person.jpg';

const AboutUs = () => {
  return (
    <div className='flex lg:flex-row flex-col-reverse my-10 max-w-7xl mx-auto p-2 gap-4'>
      <div className='relative lg:w-1/2'>
        <img className='h-[500px] lg:w-3/4 object-cover absolute top-0 left-0' src={personImage} alt="person" />
        <img className='h-[250px] lg:w-2/4 absolute top-72 border-[10px] border-white rounded-lg right-0' src={partsImage} alt="parts" />
      </div>
      <div className='lg:w-1/2 lg:text-start text-center'>
        <h3 className='text-[#FF3811] text-xl font-bold'>About Us</h3>
        <h1 className='text-5xl font-bold my-3'>We are qualified <br /> & of experience <br /> in this field</h1>
        <p className='text-start mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <p className='text-start mb-4'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <button className='btn bg-[#FF3811] hover:bg-[#ff3911de] text-white'>Get More Info</button>
      </div>
    </div>
  )
}

export default AboutUs
