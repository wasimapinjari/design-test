export default function Form() {
  const styleInside =
    'bg-gray-100 px-4 py-2 border-solid border-2 border-gray-300 rounded-md text-gray-800';
  return (
    <div className='grid place-items-center'>
      <div className='max-w-[50rem] p-10 pt-20 text-zinc-800 text-center'>
        <h1 className='font-boldh sm:hidden'>Contact Us</h1>
        <h2 className='text-4xl font-bold pb-8 sm:hidden'>
          Make an Appointment
        </h2>
        <h2 className='text-4xl font-bold pb-8  hidden sm:block'>
          Book Appointment
        </h2>
        <div className='mb-2 sm:grid-cols-1 grid grid-cols-2 gap-x-4 gap-y-4  justify-stretch'>
          <label
            htmlFor='name'
            className=' hidden sm:block font-bold text-left'
          >
            Name *
          </label>
          <input
            className={styleInside}
            type='text'
            id='name'
            placeholder='Full Name'
          />
          <label
            htmlFor='email'
            className='hidden sm:block font-bold text-left'
          >
            Email address *
          </label>
          <input
            className={styleInside}
            type='text'
            id='email'
            placeholder='example@gmail.com'
          />

          <label
            htmlFor='department'
            className='hidden font-bold   sm:block text-bold text-left'
          >
            Department *
          </label>
          <select
            className={`${styleInside} text-gray-800 placeholder:text-gray-800  self-stretch`}
            id='department'
            value='default'
          >
            <option value='default'>Please Select</option>
            <option value='a'>A</option>
            <option value='b'>B</option>
          </select>
          <label
            htmlFor='time'
            className='hidden font-bold  sm:block text-bold text-left'
          >
            Time *
          </label>
          <select
            className={`${styleInside} placeholder:text-gray-800 self-stretch`}
            value='time'
          >
            <option value='default'>4:00 Available</option>
            <option value='a'>A</option>
            <option value='b'>B</option>
          </select>
        </div>
        <textarea
          className={`${styleInside} mt-4 sm:hidden w-full`}
          name='message'
          id='message'
          rows={5}
        ></textarea>
        <button className='p-4 mt-8 bg-blue-400 text-white rounded-md'>
          Book Appointment
        </button>
      </div>
    </div>
  );
}
