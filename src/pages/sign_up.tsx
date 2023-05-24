import { useTranslation } from "react-i18next";
import { DefaultAssets, HttpCode, Roles } from "../constants/key_local";
import { useState } from "react";
import authorApi from '../api/author-api';
import Loading from "../shared/Loading";
import { IRegisterResponse } from "../interfaces/author-interface";
import * as Notify from "../shared/Notify";
import { RouteUrl } from "../constants/path_local";

export function SignUp() {
	require('../assets/css/soft-ui-dashboard.css');
	require('../assets/css/nucleo-icons.css');
	require('../assets/css/nucleo-svg.css');

	const { t } = useTranslation();
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [role, setRole] = useState(Roles.BUYER);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		let param = {
			email: email,
			password: password,
			fullname: fullname,
			phone: phoneNumber,
			gender: "other",
			role: role,
			avatar: require("../assets/img/avatar.jpg"),
		}
		setIsLoading(true);
		authorApi.register(param).then((res) => {
			setIsLoading(false);
			let data: IRegisterResponse = res?.data;
			if (res?.status === HttpCode.OK && res?.data?.code === 0) {
				Notify.success(t("success"));
				window.location.pathname = RouteUrl.LOG_IN;
			} else {
				Notify.error(data?.message);
			}
		})
	}


	return <>
		<div className="container-fluid min-vh-100" style={{ backgroundImage: `url(${require('../assets/img/curved-images/curved14.jpg')})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
			<div className="row">
				<div className="col-xl-4 col-lg-5 col-md-7 mx-auto mt-6">
					<div className="card z-index-0">
						<div className="card-header text-center pt-4">
							<h5>{t("registerWith")}</h5>
						</div>
						<div className="card-body">
							<form role="form text-left" onSubmit={(e) => handleSubmit(e)}>
								<div className="mb-3">
									<input type="text" onChange={(e) => setFullname(e?.target?.value)} className="form-control" placeholder={t("name")} aria-label={t("name")} aria-describedby="name-addon" required/>
								</div>
								<div className="mb-3">
									<input type="email" onChange={(e) => setEmail(e?.target?.value)} className="form-control" placeholder={t("email")} aria-label={t("name")} aria-describedby="email-addon" required/>
								</div>
								<div className="mb-3">
									<input type="password" onChange={(e) => setPassword(e?.target?.value)} className="form-control" placeholder={t("password")} aria-label={t("password")} aria-describedby="password-addon" required/>
								</div>
								<div className="mb-3">
									<input type="text" onChange={(e) => setPhoneNumber(e?.target?.value)} className="form-control" placeholder={t("phoneNumber")} aria-label={t("phoneNumber")} aria-describedby="phoneNumber-addon" required/>
								</div>
								<select className="mb-3 container-fluid form-select" value={role} onChange={(e) => setRole(e?.target?.value)} required>
									{
										Object.entries(Roles).map((role) => {
											return <option value={role[1]}>{t(role[1])}</option>
										})
									}
								</select>
								<div className="form-check form-check-info text-left">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
									<label className="form-check-label" >
										{t("iAgreeThe")} <a href="#" className="text-dark font-weight-bolder">{t("termsAndConditions")}</a>
									</label>
								</div>
								<div className="text-center">
									<button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2">{t("signup")}</button>
								</div>
								<p className="text-sm mt-3 mb-0">{t("alreadyHaveAnAccount")}? <a href="/log_in" className="text-dark font-weight-bolder">{t("login")}</a></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Loading loading={isLoading}/>
	</>
}