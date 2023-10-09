import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex flex-col items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl  font-palanquin font-bold text-center justify-evenly'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>

      

      <div className='lg:max-w-[70%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
