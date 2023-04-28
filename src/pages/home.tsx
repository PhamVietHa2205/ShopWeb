import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import TopBar from '../shared/TopBar'
import Featured from "../components/Home/Featured";
import Categories from "../components/Home/Categories";
import Offer from "../components/Home/Offer";
import Product from "../components/Home/Product";
import Subscribe from "../components/Home/Subscribe";
import Footer from "../shared/Footer";
import ButtonToTop from "../shared/ButtonToTop";
import AppDrawer from "../shared/AppDrawer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../shared/Loading";
import productApi from '../api/product-api';
import { ICartProduct, ICartResponse } from "../interfaces/product-interface";
import { HttpCode, LocalStorageKey } from "../constants/key_local";
import * as Notify from "../shared/Notify";
import { updateCart } from "../redux/reducers/cart-reducer";
import { RootState } from "../redux";

export function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const cart: ICartProduct[] = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		productApi.getCart({}).then((res) => {
			if (res?.status === HttpCode.OK) {
				let data: ICartResponse = res?.data;
				dispatch(updateCart(data?.payload));
				localStorage.setItem(LocalStorageKey.CART, JSON.stringify(data?.payload));
			} else {
				Notify.error(res?.data?.message);
			}
		})
		return () => {
			localStorage.setItem(LocalStorageKey.CART, JSON.stringify(cart))
		}
	}, []);
	
	return <>
		<TopBar/>
		<AppDrawer/>
		<Featured />
		<Offer />
		<Product setLoading={setIsLoading}/>
		<Subscribe />
		<Footer />
		<ButtonToTop/>
		<Loading loading={isLoading}/>
	</>
}