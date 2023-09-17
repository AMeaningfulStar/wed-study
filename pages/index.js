import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const array = Array.from({ length: 50 }, (_, index) => index + 1);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <span className='text-3xl font-bold'>50개의 웹 프로젝트</span>
      <div className='w-4/5 h-3/4 flex flex-wrap justify-center items-center gap-x-5'>
        {
          array.map((btnNumber) => (
            <Link
              href={`/projects/project_${btnNumber}`}
              key={btnNumber}  
            >
              <div className='bg-amber-400 hover:bg-amber-500 hover:border hover:border-gray-300 flex justify-center w-24 h-11 rounded text-white font-semibold text-sm text-center items-center'>
                { btnNumber }번 프로젝트
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

