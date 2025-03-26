import React from 'react'
import ButtonNext from './ButtonNext'
import ButtonBack from './ButtonBack'

type Props = {}

const NextSection = (props: Props) => {



  return (
    <div className='next-section-bg'>
         <div className='space-button'>
        <ButtonBack />
        </div>
        <div className='space-button'>
        <ButtonNext/>
        </div>
    </div>
  )
}

export default NextSection