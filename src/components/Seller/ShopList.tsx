import { useTranslation } from 'react-i18next';
import { CATEGORY_TYPE } from '../../constants/key_local';
import { memo, useEffect, useState } from 'react';
import shopApi from '../../api/seller/shop-api';
import { HttpCode } from '../../constants/key_local';
import { IShopInformation, IShopListResponse } from '../../interfaces/seller-interface';
import * as Notify from '../../shared/Notify';
import ModalCreateShop from './ModalCreateShop';
import ModalEditShop from './ModalEditShop';
import ModalDeleteShop from './ModalDeleteShop';
import { useNavigate } from 'react-router-dom';
import { RouteUrl } from '../../constants/path_local';

interface IShopListProps {
	setLoading: (loading: boolean) => void,
}

const ShopList = (props: IShopListProps) => {
	const { setLoading } = props;
	const { t } = useTranslation();
	const [listShop, setListShop] = useState([]);
	const [showCreateShopModal, setShowCreateShopModal] = useState(false);
	const [showEditShopModal, setShowEditShopModal] = useState(false);
	const [showDeleteShopModal, setShowDeleteShopModal] = useState(false);
	const [curShopId, setCurShopId] = useState("");
	const [curShopName, setCurShopName] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		getShopList();
	}, []);

	const getShopList = () => {
		setLoading(true);
		shopApi.getShoptList({}).then((res) => {
			setLoading(false);
			if (res?.status === HttpCode.OK && res?.data?.code === 0) {
				let data: IShopListResponse = res?.data;
				setListShop(data?.payload?.shop)
			} else {
				Notify.error(res?.data?.message);
			}
		})
	}

	const handleShowCreateShopModal = () => {
		setShowCreateShopModal(true);
	}

	const handleShowEditShopModal = (e: any, id: string, name: string) => {
		e.stopPropagation();
		setCurShopId(id);
		setCurShopName(name);
		setShowEditShopModal(true);
	}

	const handleShowDeleteShopModal = (e: any, id: string, name: string) => {
		e.stopPropagation();
		setCurShopId(id);
		setCurShopName(name);
		setShowDeleteShopModal(true);
	}

	const handleCloseCreateShopModal = () => {
		setShowCreateShopModal(false);
		getShopList();
	}

	const handleCloseEditShopModal = () => {
		setShowEditShopModal(false);
		getShopList();
	}

	const handleCloseDeleteShopModal = () => {
		setShowDeleteShopModal(false);
		getShopList();
	}
	const handleViewShop = (idShop: string, name: string, logo: string) => {
		navigate(RouteUrl.SELLER_SHOP, { state: { idShop: idShop, name: name, logo: logo } });
		window.scrollTo(0, 0);
	}

	const handleViewOrders = (e: any, idShop: string, name: string, logo: string) => {
		e.stopPropagation();
		navigate(RouteUrl.SELLER_ORDERS, { state: { idShop: idShop, name: name, logo: logo } });
		window.scrollTo(0, 0);
	}

	return (
		<div className="pt-5 mx-3">
			<div className="col text-end mb-3">
				<button className='btn btn-primary rounded' onClick={handleShowCreateShopModal}>{t('createShop')}</button>
			</div>
			<h4 className='col text-center bg-secondary py-3 fw-bold'>{t('listShop')}</h4>
			<table className="table table-hover table-striped table-border container-fluid text-center">
				<thead className='bg-primary'>
					<tr>
						<th scope="col">#</th>
						<th scope="col">{t('logo')}</th>
						<th scope="col">{t('name')}</th>
						<th scope="col">{t('address')}</th>
						<th scope="col" colSpan={2}>{t('option')}</th>
					</tr>
				</thead>
				<tbody>
					{
						listShop && listShop.length > 0 ? listShop.map((shop: IShopInformation, index) => {
							return <tr onClick={() => handleViewShop(shop.id, shop.name, shop.logo)} tabIndex={2}>
								<td>{index + 1}</td>
								<td><img className='rounded-circle' src={shop?.logo} style={{ width: 30 }} alt={shop.logo} /></td>
								<td>{shop.name}</td>
								<td>{shop.address}</td>
								<td className='align-middle'>
									<button className='btn' onClick={(e) => handleShowEditShopModal(e, shop?.id, shop?.name)} tabIndex={1}><i className="fa fa-edit text-dark"></i></button>
									<button className='btn' onClick={(e) => handleShowDeleteShopModal(e, shop?.id, shop?.name)} tabIndex={1}><i className="fa fa-trash text-dark"></i></button>
									<button className='btn' onClick={(e) => handleViewOrders(e, shop?.id, shop?.name, shop?.logo)} tabIndex={1}><i className="fa fa-file-text-o text-dark"></i></button>
								</td>
							</tr>
						}) : <tr><td colSpan={6}>{t('youHaveNoShop')}</td></tr>
					}
				</tbody>
			</table>
			<ModalCreateShop showCreateShopModal={showCreateShopModal} handleCloseCreateShopModal={handleCloseCreateShopModal} setLoading={setLoading} />
			<ModalEditShop showEditShopModal={showEditShopModal} handleCloseEditShopModal={handleCloseEditShopModal} setLoading={setLoading} shopId={curShopId} preName={curShopName} />
			<ModalDeleteShop showDeleteShopModal={showDeleteShopModal} handleCloseDeleteShopModal={handleCloseDeleteShopModal} setLoading={setLoading} shopId={curShopId} shopName={curShopName} />
		</div>
	);

}
export default memo(ShopList);