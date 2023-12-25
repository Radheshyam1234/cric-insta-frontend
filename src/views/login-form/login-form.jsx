import Button from 'components/button/button'
import PasswordInput from 'components/input/password-input'
import TextInput from 'components/input/text-input'

const LoginForm = () => {
  return (
    <div className='p-5 bg-primary-500 rounded-[2px] flex flex-col gap-4 min-w-[400px]'>
      <p className='text-center font-bold text-white text-lg'>Social media for cricket fans </p>
      <div className='space-y-6'>
        <TextInput containerClassName='space-y-1.5' label='Email Address' placeHolder='Enter your email address' />
        <PasswordInput containerClassName='space-y-1.5' label='Password' />
      </div>
      <div className='mt-10 space-y-4 w-full'>
        <Button type='primary' className='text-sm font-medium py-2.5 px-[18px] w-full text-lg'>
          LOGIN
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
