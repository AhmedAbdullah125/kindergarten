import React, { Suspense, lazy } from 'react'
import Header from '../Main/Header/Header'
import Mission from '../Main/Mission/Mission'
import Testimonials from '../Testimonials/Testimonials'
import Articles from '../Main/Articles/Articles'
// import Services from '../Main/Services/Services'
const Services = lazy(() => import('../Main/Services/Services'))
const Courses = lazy(() => import('../Main/Courses/Courses'))

export default function Home() {
  return (
    <div className='home'>
      <Header></Header>
      <Mission></Mission>
      <Suspense><Services></Services></Suspense>
      <Suspense><Courses></Courses> </Suspense>
      <Suspense><Testimonials></Testimonials> </Suspense>
      <Suspense><Articles></Articles> </Suspense>

    </div>
  )
}
