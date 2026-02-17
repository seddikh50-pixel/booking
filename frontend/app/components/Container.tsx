import React from 'react'

type ContainerProps = {
  children: React.ReactNode; // مهم جدًا لقبول أي محتوى داخل المكون
  className?: string;        // لجعل className اختياري
};
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`container mx-auto ${className} w-full `}>
      {children}
    </div>
  )
}

export default  Container
