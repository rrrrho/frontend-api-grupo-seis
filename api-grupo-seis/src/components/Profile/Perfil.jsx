import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUserByEmail } from "../../services/UserService";
import { useAppSelector } from "../../context/hooks";
import { selectUser } from "../../context/slices/userSlice";

const SeccionPerfil = () => {
  // Ejemplo de datos del perfil (puedes obtener estos datos de una fuente de datos o de props)
  const [profileData,setProfileData] = useState({})
  const userSlice = useAppSelector(selectUser)
  const fetchUser = async()=>{
    try{
      const response = await getUserByEmail(userSlice.email)
      setProfileData(response.user)
    }catch(error){
      console.error(error)
    }
  } 

  useEffect(()=>{
    fetchUser();

  },[])

  return (
    <Box p="4">
      <Heading as="h1" size="lg" mb="4">
        Perfil
      </Heading>
      <VStack align="start" spacing="2">
        <Text>
          <strong>Nombre:</strong> {profileData.name}
        </Text>
        <Text>
          <strong>Apellido:</strong> {profileData.lastname}
        </Text>
        <Text>
          <strong>DNI:</strong> {profileData.dni}
        </Text>
        <Text>
          <strong>Correo Electronico:</strong> {profileData.email}
        </Text>
        <Text>
          <strong>Teléfono:</strong> {profileData.phoneNumber}
        </Text>
      </VStack>
    </Box>
  );
};

export default SeccionPerfil;
