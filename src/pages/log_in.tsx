import { useTranslation } from 'react-i18next';
import { WEB_SHOP_INFO } from '../constants/key_local';

export function LogIn() {
	const { t } = useTranslation();
	return <section className="login-block">
		<div className="container">
			<div className="row">
				<div className="col-md-4 login-sec">
					<h2 className="text-center">{t('loginNow')}</h2>
					<form className="login-form">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1" className="text-uppercase">{t('username')}</label>
							<input type="text" className="form-control" placeholder="" />

						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1" className="text-uppercase">{t('password')}</label>
							<input type="password" className="form-control" placeholder="" />
						</div>


						<div className="form-check">
							<label className="form-check-label">
								<input type="checkbox" className="form-check-input" />
								<small>{t('rememberMe')}</small>
							</label>
							<button type="submit" className="btn btn-login float-right">{t('submit')}</button>
						</div>

					</form>
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
}