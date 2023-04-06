import { useTranslation } from "react-i18next";
import { WEB_SHOP_INFO } from "../../constants/key_local";

interface IContactDetail {
	
}

const ContactDetail = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className="container-fluid pt-5">
				<div className="text-center mb-4">
					<h2 className="section-title px-5"><span className="px-2">{t('contactForAnyQueries')}</span></h2>
				</div>
				<div className="row px-xl-5">
					<div className="col-lg-7 mb-5">
						<div className="contact-form">
							<div id="success"></div>
							<form name="sentMessage" id="contactForm" noValidate>
								<div className="control-group">
									<input type="text" className="form-control" id="name" placeholder={t('yourName')}
										required data-validation-required-message="Please enter your name" />
									<p className="help-block text-danger"></p>
								</div>
								<div className="control-group">
									<input type="email" className="form-control" id="email" placeholder={t('yourEmail')}
										required data-validation-required-message="Please enter your email" />
									<p className="help-block text-danger"></p>
								</div>
								<div className="control-group">
									<input type="text" className="form-control" id="subject" placeholder={t('subject')}
										required data-validation-required-message="Please enter a subject" />
									<p className="help-block text-danger"></p>
								</div>
								<div className="control-group">
									<textarea className="form-control" rows={6} id="message" placeholder={t('message')}
										required
										data-validation-required-message={t('messageBlankValidate')}></textarea>
									<p className="help-block text-danger"></p>
								</div>
								<div>
									<button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">{t('sendMessage')}</button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-5 mb-5">
						<h5 className="font-weight-semi-bold mb-3">{t('getInTouch')}</h5>
						<p>{t('contactToMe')}</p>
						<div className="d-flex flex-column">
							<h5 className="font-weight-semi-bold mb-3">{WEB_SHOP_INFO.SITE_NAME}</h5>
							<p className="mb-2"><i className="fa fa-map-marker text-primary mr-3"></i>{WEB_SHOP_INFO.ADDRESS}</p>
							<p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>{WEB_SHOP_INFO.EMAIL}</p>
							<p className="mb-0"><i className="fa fa-phone text-primary mr-3"></i>+{WEB_SHOP_INFO.PHONE_NUMBER}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactDetail;