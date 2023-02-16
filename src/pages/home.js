import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next"

export function Home() {
	const { t } = useTranslation();
	const [language, setLanguage] = useState("vi");

	const handleChangeLanguage = (event) => {
		setLanguage(event.target.value);
		i18next.changeLanguage(event.target.value);
	}

	const productCategory = ['Quần áo nam', 'Quần áo nữ', 'Quần áo trẻ em'];

	return <div>
		{/* header */}
		<div className="row">
			<img src="/images/logo.jpg" alt='Logo Image' className="col-3" style={{ maxHeight: 120 }} />
			<div className="col">
				<div className="row justify-content-end bg-warning pe-4 pt-2">
					<label className="col-2">{t('labelChooseLanguage')}</label>
					<select value={language} className="col-2 mr-2" onChange={handleChangeLanguage}>
						<option value={"vi"}>Tiếng Việt</option>
						<option value={"en"}>English</option>
					</select>
				</div>
				<ul className="nav row h-100 justify-content-around align-items-end">
					<li className="nav-item col-2">
						<a className="nav-link">{t('navHome')}</a>
					</li>
					<li className="nav-item col-2">
						<a className="nav-link">{t('navBestSeller')}</a>
					</li>
					<li className="nav-item col-1">
						<a className="nav-link">{t('navHotPick')}</a>
					</li>
					<div className="col dropdown">
						<button type="button" className={`btn dropdown-toggle dropdown-toggle-split`}
							data-bs-toggle="dropdown" aria-expanded="false">
                            Phân loại
						</button>
						<div className="dropdown-menu">
							{
								productCategory.map((productType) => {
									return <a className="dropdown-item">{productType}</a>
								})
							}
						</div>
					</div>
                    <i className="fa fa-2x fa-shopping-cart col"></i>
                    <i className="fa fa-2x fa-user col">Đăng nhập</i>
				</ul>
			</div>
		</div>
	</div>
}