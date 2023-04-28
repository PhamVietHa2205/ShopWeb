import NavBar from "../shared/admin/NavBar";
import Header from "../shared/admin/Header";
import Footer from "../shared/admin/Footer";
import adminCommentApi from "../api/admin/comment-api";
import { useEffect, useState } from "react";
import { IAdminGetCommentResponse } from "../interfaces/admin-interface";
export function CommentManager() {
    require('./../assets/css/soft-ui-dashboard.css');
    require('./../assets/css/nucleo-icons.css');
    require('./../assets/css/nucleo-svg.css');

    useEffect(() => {
        adminCommentApi.getCommenttList({}).then((res: any) => {
            const data: IAdminGetCommentResponse = res?.data;
            setRecord(data.payload.comments)
        });
    }, []);

    const [commentRecord, setRecord] = useState([]);
    return (
        <>
            <NavBar />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Header />

                <div className="container-fluid py-4">

                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header pb-0">
                                    <h6>Comment table</h6>
                                </div>
                                <div className="card-body px-0 pt-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nội dung</th>
                                                    <th className="text-center text-uppercase  text-secondary text-xxs font-weight-bolder opacity-7 ">Số sao đánh giá</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    commentRecord.map((item, index) => {
                                                        return <tr key={item.id}>
                                                            <td className="align-middle  ">
                                                                <span className="text-secondary text-xs font-weight-bold">{item.content}</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">{item.star}</span>
                                                            </td>
                                                        </tr>
                                                    })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />

                </div>
            </main>

        </>
    )
}