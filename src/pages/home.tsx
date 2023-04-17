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

export function Home() {
	require('./../assets/css/style.css');
	require('./../assets/css/style.min.css');
	require('./../assets/scss/style.scss');
	require('./../assets/css/newStyle.css');
	
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