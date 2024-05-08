import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SeccionPerfil from "./Perfil";
import PedidosRealizados from "./Pedidos";
import ProductForm from "../ProductForm/ProductForm";
import UserAdmin from "../UserAdmin/UserAdmin";
import ManageProductTable from "../ManageProducts/ManageProduct";
import Loading from "../Loading/Loading";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      <div>
        <Box w={"100%"} background={"brand.darkMustard"} h={"10vh"} />

        <Tabs isFitted variant="enclosed" colorScheme="green">
          <TabList mb="1em">
            <Tab>Perfil</Tab>
            <Tab>Pedidos</Tab>
            <Tab>Agregar producto</Tab>
            <Tab>Gestionar productos</Tab>
            <Tab>Administración de usuarios</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SeccionPerfil />
            </TabPanel>
            <TabPanel>
              <PedidosRealizados />
            </TabPanel>
            <TabPanel>
              <ProductForm />
            </TabPanel>
            <TabPanel>
              <ManageProductTable />
            </TabPanel>
            <TabPanel>
              <UserAdmin />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
