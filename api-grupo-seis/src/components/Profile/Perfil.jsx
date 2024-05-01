import React from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

const SeccionPerfil = () => {
  // Ejemplo de datos del perfil (puedes obtener estos datos de una fuente de datos o de props)
  const profileData = {
    nombre: 'Juan',
    apellido: 'Pérez',
    dni: '12345678',
    fechaNacimiento: '01/01/1990',
    genero: 'Masculino',
    telefono: '123-456-789'
  };

  return (
    <Box p="4">
      <Heading as="h1" size="lg" mb="4">
        Perfil
      </Heading>
      <VStack align="start" spacing="2">
        <Text>
          <strong>Nombre:</strong> {profileData.nombre}
        </Text>
        <Text>
          <strong>Apellido:</strong> {profileData.apellido}
        </Text>
        <Text>
          <strong>DNI:</strong> {profileData.dni}
        </Text>
        <Text>
          <strong>Fecha de Nacimiento:</strong> {profileData.fechaNacimiento}
        </Text>
        <Text>
          <strong>Género:</strong> {profileData.genero}
        </Text>
        <Text>
          <strong>Teléfono:</strong> {profileData.telefono}
        </Text>
      </VStack>
    </Box>
  );
};

export default SeccionPerfil;
