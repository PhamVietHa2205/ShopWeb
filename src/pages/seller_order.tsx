import ButtonToTop from "../shared/ButtonToTop";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import Loading from "../shared/Loading";
import TopBar from "../shared/seller/TopBar";
import AppDrawer from "../shared/seller/AppDrawer";
import Orders from "../components/Seller/Orders";
export function SellerOrder() {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);

    return <>
        <TopBar />
        <AppDrawer />
        <Orders setLoading={setIsLoading}/>
        <ButtonToTop />
        <Loading loading={isLoading}/>
    </>
}