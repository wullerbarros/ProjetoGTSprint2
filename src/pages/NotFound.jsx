import React from 'react'
import { Alert } from 'antd';
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
      <div className='flex flex-col gap-10 px-5'>
      
      <Alert
        message="Pagina não encontrada"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
        <p>Não se preocupe, vai da tudo certo<span><Link  className='hover:underline text-blue-500' to='/'>Pagina inicial</Link></span></p>
      </div>
    )
    
  
}

export default NotFound