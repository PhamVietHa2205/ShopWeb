import { useTranslation } from "react-i18next";
import { memo } from "react";


const ChangePassword = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Change Password</span></h2>
                </div>


                <div className="contact-form w-50 mx-auto mb-4 ">
                    <form name="sentMessage" id="contactForm" noValidate>
                        <div className="control-group">
                            <input type="text" className="form-control" id="name" placeholder="Username"
                                required data-validation-required-message="Please enter your username" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control" id="email" placeholder="Current Password"
                                required data-validation-required-message="Please enter your current password" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="subject" placeholder="New Password"
                                required data-validation-required-message="Please enter your new password" />
                            <p className="help-block text-danger"></p>
                        </div>

                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Save</button>
                        </div>
                    </form>
                </div>



            </div>
        </>
    )
}

export default memo(ChangePassword);