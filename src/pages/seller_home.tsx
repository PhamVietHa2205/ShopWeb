import TopBar from '../shared/TopBar'
import ButtonToTop from "../shared/ButtonToTop";
import AppDrawer from '../shared/seller/AppDrawer';
import ShopList from '../components/Seller/ShopList';
import Loading from '../shared/Loading';
import { useState } from 'react';

export function SellerHome() {
    const [isLoading, setIsLoading] = useState(false);

    return <>
        <TopBar />
        <AppDrawer />
        <ShopList setLoading={setIsLoading}/>
        <ButtonToTop />
        <Loading loading={isLoading}/>
    </>
}