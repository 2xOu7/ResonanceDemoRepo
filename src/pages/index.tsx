import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Button } from '@mui/material'
import { logConversion, notifyEvent } from 'resonance-client'

export default function Home() {
  return (
    <>
      <Button
        onClick={() => {
          logConversion('test_event')
          console.log('Here')
        }}
        variant={'outlined'}
        style={{ marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}
      >
        Conversion Button
      </Button>

      <Button
        onClick={() => {
          notifyEvent('Button Clicked')
        }}
        variant={'outlined'}
        color={'secondary'}
        style={{ marginLeft: '10px', marginRight: '10px', marginTop: '10px' }}
      >
        Trigger Button
      </Button>
    </>
  )
}
