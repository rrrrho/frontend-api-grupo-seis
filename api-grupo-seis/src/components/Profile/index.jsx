import { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SeccionPerfil from "./Perfil";
import PedidosRealizados from "./Pedidos";
import ProductForm from "../ProductForm/ProductForm";
import UserAdmin from "../UserAdmin/UserAdmin";
import ManageProductTable from "../ManageProducts/ManageProduct";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../context/hooks";
import { selectUser } from "../../context/slices/userSlice";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    console.log(user)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      <div>
        <Tabs isFitted variant="enclosed" colorScheme="green">
          <TabList mb="1em">
            <Tab>Perfil</Tab>
            {user?.role === 'BUYER' && <Tab>Pedidos</Tab>}
            {user?.role === 'VENDOR' && 
            <>
              <Tab>Agregar producto</Tab>
              <Tab>Gestionar productos</Tab>
            </>}
            {user?.role === 'ADMIN' && <Tab>Administración de usuarios</Tab>}
          </TabList>

          <TabPanels>
            <TabPanel>
              <SeccionPerfil />
            </TabPanel>
            {user?.role === 'BUYER' &&             
            <TabPanel>
              <PedidosRealizados />
            </TabPanel>}
            {user?.role === 'VENDOR' && 
              <>
                <TabPanel>
                  <ProductForm />
                </TabPanel>
                <TabPanel>
                  <ManageProductTable />
                </TabPanel>
              </>}
            {user?.role === 'ADMIN' && 
              <TabPanel>
                <UserAdmin />
              </TabPanel>}
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
