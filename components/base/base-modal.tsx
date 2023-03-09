import React from 'react'
import BaseButton from './base-button'

interface Props {
  onClick?: () => void;
  title?: string;
  content?: string;
  showModal?: boolean;
  setShowModal?: () => void;
}

export default function BaseModal(props: Props) {
  const { setShowModal, onClick, content, title, showModal = false, } = props

  return (<div>
    {showModal &&
      <div className='w-full h-full fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.75)]'>
        <div className='w-96 h-96 absolute top-1/2 left-1/2 z-50 opacity-100'>
          <div className='w-full h-full flex flex-col items-center space-y-2 p-4 bg-white rounded-md'>
            <div className='h-1/3 flex items-center'>
              <p className='text-center text-2xl text-blood'>{title}</p>
            </div>
            <div className='h-1/3 flex items-center'>
              <p>{content}</p>
            </div>
            <div className='h-1/3 flex items-end space-x-4'>
              <BaseButton onClick={onClick} style="grass" slot="Confirm" className="w-1/2 h-10 hover:scale-110" />
              <BaseButton onClick={() => { setShowModal(false) }} style="blood" slot="Cancel" className="w-1/2 h-10 hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    }
  </div>
  )
}
