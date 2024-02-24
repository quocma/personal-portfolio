import Image from 'next/image';
import Link from 'next/link';
import ThemeModeButton from '../buttons/ThemeModeButton';
import MenuNavigation from '../navigation/MenuNavigation';


const MainHeader = () => {

  return (
    <div className='flex items-center gap-4 mt-10 mx-20'>
      <div className='flex-shrink-0 mr-10'>
       <Link href={'/'}>
          <Image
            width={80}
            height={80}
            src={'/assets/images/logo/q.png'}
            alt='logo'
          />
       </Link>
      </div>
      <div className='w-full flex-shrink'>
        <MenuNavigation />
      </div>
      <div className='w-1/5'>
        <div className='flex items-center justify-end'>
          <ThemeModeButton classname='p-[10px] hover:bg-c3-main hover:text-white' />
        </div>
      </div>
    </div>
  )
}

export default MainHeader