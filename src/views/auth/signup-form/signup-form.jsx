import Button from 'components/button/button'
import PasswordInput from 'components/input/password-input'
import TextInput from 'components/input/text-input'

const SignUpForm = () => {
  return (
    <div className='p-5 lg:p-8 bg-primary-500 rounded-[2px] flex flex-col gap-4 w-[340px] sm:w-[440px]'>
      <p className='text-center font-bold text-success-500 text-lg'>Social media for cricket fans </p>
      <div className='space-y-6 '>
        <TextInput containerClassName='space-y-1.5 ' label='Email Address *' placeHolder='Enter your email address' />
        <TextInput containerClassName='space-y-1.5 ' label='Username *' placeHolder='Enter your user name' />
        <PasswordInput containerClassName='space-y-1.5' label='Create Password' />
      </div>
      <div className='mt-6 space-y-4 w-full'>
        <Button as='button' type='primary' className='w-full font-semibold tracking-widest  py-2.5 px-[18px] '>
          Create account
        </Button>
      </div>
      <div className='mt-5 text-center'>
        <p className='text-[15px] text-gray-200 text-center inline block'> Already an user? </p>
        <Button as='link' href='/auth/login' className='  ml-1.5 hover:underline font-semibold text-[#5a99e8]'>
          Login
        </Button>
      </div>
    </div>
  )
}

export default SignUpForm
