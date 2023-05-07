import TopBar from '../shared/TopBar'
import ButtonToTop from "../shared/ButtonToTop";
import AppDrawer from "../shared/AppDrawer";
import PageHeader from "../shared/PageHeader";
import Footer from "../shared/Footer";
export function CreateProduct() {
    require('./../assets/css/style.css');
    require('./../assets/css/style.min.css');
    require('./../assets/scss/style.scss');
    require('./../assets/css/newStyle.css');
    const listOfShop = [
        {
            "id": "eff42b92-0f87-4fa7-bccc-5ebcb5c74bc6",
            "name": "Thế giới di động",
        },
        {
            "id": "eff42b92-0f87-4fa7-bccc-5ebcb2144144",
            "name": "Thế giới ma",
        },

    ];
    return <>
        <TopBar />
        <AppDrawer />
        <PageHeader title={'createProduct'} />
        <form className='w-50 mx-auto  mb-4'>
            <div className="form-group">
                <label >Tên sản phẩm</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter name product" />
            </div>
            <div className="form-group">
                <label >Giá tiền</label>
                <input type="number" className="form-control" placeholder="Price" />
            </div>
            <div className="form-group">
                <label >Số lượng hàng</label>
                <input type="number" className="form-control" placeholder="Quantity" />
            </div>

            <div className='form-group'>
                <label >Shop</label>
                <select className="form-select">
                    <option selected>Choose Shop</option>
                    {listOfShop.map((item) => {
                        return <option key={item.id} value={item.name}>{item.name}</option>
                    })}

                </select>
            </div>
            <div className="form-group">
                <label>Ảnh sản phẩm</label>
                <input type="file" className="form-control-file" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>

        <ButtonToTop />
        <Footer />
    </>
}