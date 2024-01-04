import Sidebar from 'components/navigation/sidebar/sidebar'

const Layout = ({ children }) => {
  return (
    <>
      <div className='relative flex items-start max-w-[1440px] mx-auto xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4'>
        <Sidebar />
        {children}
      </div>
    </>
  )
}

export default Layout
