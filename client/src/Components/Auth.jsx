import React, { useEffect,useState } from 'react'
import { Box ,Button,Text,Heading} from '@chakra-ui/react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Auth() {

    const [formOpen,setFormOpen] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname==='/auth')
        {
            setFormOpen(false);
        }else{
            setFormOpen(true)
        }

    },[location])

  return (
    <Box display='flex' alignItems='center' justifyContent='center' h='80vh' w='100%' flexDirection='column'>
        {
            !formOpen &&
            <Box mt='20px' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Heading as='h6' textAlign='center' >Login or Signup to access your notes </Heading>
                <Box mt='20px'>
                    <Link to="/auth/login"><Button mr='20px'>Login</Button></Link>
                    <Link to="/auth/signup"><Button>Sign Up</Button></Link>  
                </Box> 
            </Box>
        }
        <Outlet/>
    </Box>
  )
}
