import React from 'react';
import { Link, useParams } from 'react-router-dom';
import back from '../assets/back.svg'
import { Button } from 'primereact/button';

const Issue = () => {
  const router = useParams();
  const { id } = router;

  return (
    <section className='flex flex-col max-w-3xl mx-6 md:mx-auto gap-8 my-12'>
      <Link to={'/admin/issues'} className='self-start'>
        <img src={back} alt="back" className='w-9' />
      </Link>
      {/* <p className='text-slate-600 mb-1 underline'>Issue id: {id}</p> */}
      <h1 className='text-4xl font-light mt-10 text-slate-700'>My scooter got scratched & dented!!</h1>
      <p className='text-primary'>Yash Chavan  |  24 Oct 2023 </p>
      <p className='font-light text-lg'>One frustrating afternoon in the crowded parking lot, I returned to my scooter only to discover a disheartening sight. Someone had carelessly scratched and dented my beloved scooter while it was parked. It was a dismaying reminder of the lack of consideration some individuals show in shared spaces. The incident left me feeling both annoyed and disheartened, as I knew that the road to repairs and restoration would be both time-consuming and costly.</p>
      <Button label='Mark Resolved' className='self-start' />
    </section>
  );
};

export default Issue;
