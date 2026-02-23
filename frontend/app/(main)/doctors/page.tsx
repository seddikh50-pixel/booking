import React from 'react'
import Container from '../../components/Container'
import Link from 'next/link'
const pqge = () => {


      const listSpecialties = [
        {
            name: "طبيب عام ",
        },
        {
            name: " طبيب النساء والتوليد",
        },
        {
            name: "طبيب الجلدية",
        },
        {
            name: "طبيب الأطفال",
        },
        {
            name: "طبيب الأعصاب",
        },
        {
            name: "طبيب الجهاز الهظمي",
        }

    ]
  return (
    <div>
      <Container className='pt-20 flex gap-10'>
        <div>
          <h1 className='text-xl font-bold text-gray-600'>  تصفّح الأطباء المختصّين</h1>
          <div className='flex flex-col gap-4 mt-4'>
            {listSpecialties.map((item, index) => (
              <div key={index} className='flex items-start border rounded-sm px-2 py-2 border-gray-500 flex-col cursor-pointer'>
                <Link href="#"  className='text-sm font-light text-gray-500'>{item.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          list doctors here

        </div>
      </Container>

    </div>
  )
}

export default pqge
