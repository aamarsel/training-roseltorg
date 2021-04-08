import React from 'react'
import RoseltorgLogo from 'images/roseltorg-logo.svg'
import {Button} from "@material-ui/core";

export interface IHomeProps {}

const Home = (props: IHomeProps) => {
  return (
    <div className='fit-container centered-content'>
      <div className='flex-column'>
        <img
          src={RoseltorgLogo}
          alt='Roseltorg Logo'
          width={300}
          height={300}
        />
        <Button
          variant='contained'
          color='primary'
        >
          Войти
        </Button>
      </div>
    </div>
  )
}

export default Home