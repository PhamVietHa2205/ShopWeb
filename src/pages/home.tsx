import i18next from "i18next";
import { useState } from "react";
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
import { testReducer } from "../redux/reducers/common-reducer";
export function Home() {
	const { t } = useTranslation();
	const [language, setLanguage] = useState("vi");
	const isLogin = localStorage.getItem('isLogin');
	const commonRedux = useSelector((state: any) => state.common);
	const dispatch = useDispatch();
	dispatch(testReducer("kkk"));

	const handleChangeLanguage = (event: any) => {
		setLanguage(event.target.value);
		i18next.changeLanguage(event.target.value);
	}

	return <>
		<TopBar/>
		<AppDrawer/>
		<Featured />
		<Categories/>
		<Offer />
		<Product />
		<Subscribe />
		<Footer />
		<ButtonToTop/>
	</>
}