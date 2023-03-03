import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next"
import TopBar from '../shared/TopBar'
import NavBar from "../shared/NavBar";
import Featured from "../components/Home/Featured";
import Categories from "../components/Home/Categories";
import Offer from "../components/Home/Offer";
import Product from "../components/Home/Product";
import Subscribe from "../components/Home/Subscribe";
import Footer from "../shared/Footer";
import ButtonToTop from "../shared/buttonToTop";
export function Home() {
	const { t } = useTranslation();
	const [language, setLanguage] = useState("vi");
	const isLogin = localStorage.getItem('isLogin');

	const handleChangeLanguage = (event) => {
		setLanguage(event.target.value);
		i18next.changeLanguage(event.target.value);
	}

	return <div>
		<TopBar/>
		<NavBar />
		<Featured />
		<Categories/>
		<Offer />
		<Product />
		<Subscribe />
		<Footer />
		<ButtonToTop/>
	</div>
}