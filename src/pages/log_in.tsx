import { useTranslation } from 'react-i18next';
import { HttpCode, LocalStorageKey, WEB_SHOP_INFO } from '../constants/key_local';
import authorApi from '../api/author-api';
import { ILoginResponse } from '../interfaces/author-interface';
import * as Notify from "../shared/Notify";
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/reducers/user-reducer';
import { RouteUrl } from '../constants/path_local';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading';

export function LogIn() {
	require('./../assets/css/log-in.css')
	require('./../assets/css/style.css')

	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const params = {
			email: email,
			password: password,
		}
		setIsLoading(true);
		authorApi.login(params).then((res: any) => {
			setIsLoading(false);
			const data: ILoginResponse = res?.data;
			if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
				Notify.success(data?.message);
				localStorage.setItem(LocalStorageKey.USER_INFO, JSON.stringify(data?.payload?.user));
				dispatch(updateUser(data?.payload?.user));
				localStorage.setItem(LocalStorageKey.TOKEN, data?.payload?.token);
				localStorage.setItem(LocalStorageKey.LOGIN, "true");
				data?.payload?.user?.role === "buyer" 
				? window.location.pathname = RouteUrl.HOME_PATH
				: window.location.pathname = RouteUrl.SELLER_HOME;
			} else {
				Notify.error(data?.message)
			}
		});
	}

	return <>
	<section className="login-block">
		<div className="container">
			<div className="row">
				<div className="col-md-4 login-sec">
					<h2 className="text-center">{t('loginNow')}</h2>
					<form className="login-form" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="email" className="text-uppercase">{t('username')}</label>
							<input type="text" className="form-control" onChange={(e) => setEmail(e?.target?.value)} placeholder="" />

						</div>
						<div className="form-group">
							<label htmlFor="password" className="text-uppercase">{t('password')}</label>
							<input type="password" className="form-control" onChange={(e) => setPassword(e?.target?.value)} placeholder="" />
						</div>


						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox" className="form-check-input" />
								<small>{t('rememberMe')}</small>
							</label>
							<button type="submit" className="btn btn-login float-right">{t('submit')}</button>
						</div>

					</form>
					<div className="position-absolute" style={{bottom: "40px", right: "0px", width: "80%"}}>{t("notHaveAnAccount")}? <a href='/sign_up' className='btn text-primary px-0'>{t("signup")}</a></div>
					<div className="copy-text">{t('createdWith')}<i className="fa fa-heart"></i> {t('by')} <a href="http://grafreez.com">{WEB_SHOP_INFO.DESIGNER}</a></div>
				</div>
				<div className="col-md-8 banner-sec">
					<div id="carouselExampleIndicators" className="carousel slide" data-bs-circle="true" data-bs-ride="carousel">
						<ol className="carousel-indicators">
							<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
							<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
						</ol>
						<div className="carousel-inner" role="listbox">
							<div className="carousel-item active" data-bs-interval="3000">
								<img className="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
								<div className="carousel-caption d-none d-md-block">
									<div className="banner-text">
										<h2>{t('welcomeToShop')}</h2>
										<p>{t('welcomeToShopDescription')}</p>
									</div>
								</div>
							</div>
							<div className="carousel-item" data-bs-interval="3000">
								<img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
								<div className="carousel-caption d-none d-md-block">
									<div className="banner-text">
										<h2>{t('beCautious')}</h2>
										<p>{t('beCautiousDescription')}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<Loading loading={isLoading}/>
	</>
}