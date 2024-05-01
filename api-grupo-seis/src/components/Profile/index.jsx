import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SeccionPerfil from "./Perfil";
import PedidosRealizados from "./Pedidos";


const Profile = () => {
    return (
        <div>
            <Box w={'100%'} background={'brand.darkMustard'} h={'10vh'} />

            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>

                    <Tab>Perfil</Tab>
                    <Tab>Pedidos</Tab>

                </TabList>

                <TabPanels>
                    <TabPanel>
                        <SeccionPerfil></SeccionPerfil>
                    </TabPanel>
                    <TabPanel>
                     <PedidosRealizados></PedidosRealizados>   
                        
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export default Profile;