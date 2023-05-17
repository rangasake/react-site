import { Carousel } from 'antd';
const contentStyle = {
  height: '260px',
  width: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  display: 'grid',
};
const Hero = () => (
  <Carousel autoplay>
    
    {/* <div>
      <div style={{ backgroundImage: `url('https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format')` }} className='h-[560px] image relative   bg-cover bg-no-repeat flex items-center'>
        <h3 className='text-center text-4xl text-white mx-auto '> Hello</h3>
      </div>
    </div> */}
    
    <div className='w-full'>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div className=''>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div className=''>
      <h3 style={contentStyle}>4</h3>
    </div>
   
  </Carousel>
  
);
export default Hero;
