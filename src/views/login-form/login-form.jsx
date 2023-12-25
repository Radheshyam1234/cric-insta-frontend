import Button from 'components/button/button'
import PasswordInput from 'components/input/password-input'
import TextInput from 'components/input/text-input'

const LoginForm = () => {
  return (
    <div className='p-5 lg:p-8 bg-primary-500 rounded-[2px] flex flex-col gap-4 w-[340px] sm:w-[440px]'>
      <p className='text-center font-bold text-white text-lg'>Social media for cricket fans </p>
      <div className='space-y-6'>
        <TextInput containerClassName='space-y-1.5' label='Email Address' placeHolder='Enter your email address' />
        <PasswordInput containerClassName='space-y-1.5' label='Password' />
      </div>
      <div className='mt-6 space-y-4 w-full'>
        <Button as='button' type='primary' className='w-full font-semibold tracking-widest font-medium py-2.5 px-[18px] '>
          LOGIN
        </Button>
      </div>
      <div className='mt-5'>
        <p className='text-[15px] text-gray-200 text-center'>
          Not a customer yet?{' '}
          <Button as='link' to='/signup' className=' ml-1.5 hover:underline font-semibold text-[#5a99e8]'>
            Sign Up!
          </Button>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
