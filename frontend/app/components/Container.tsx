import React from 'react'

type ContainerProps = {
  children: React.ReactNode; // مهم جدًا لقبول أي محتوى داخل المكون
  className?: string;        // لجعل className اختياري
};
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={` mx-auto ${className}  mx-auto px-2xl  bg-amber-500  w-full`}>
      {children}
    </div>
  )
}

export default  Container
