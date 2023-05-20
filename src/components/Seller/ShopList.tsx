import { useTranslation } from 'react-i18next';
import { CATEGORY_TYPE } from '../../constants/key_local';
import { memo, useEffect, useState } from 'react';
import shopApi from '../../api/seller/shop-api';
import { HttpCode } from '../../constants/key_local';
import { IShopInformation, IShopListResponse } from '../../interfaces/seller-interface';
import * as Notify from '../../shared/Notify';

interface IShopListProps {
	setLoading: (loading: boolean) => void,
}

const ShopList = (props: IShopListProps) => {
	const { setLoading } = props;
	const { t } = useTranslation();
	const [listShop, setListShop] = useState([]);

	useEffect(() => {
		setLoading(true);
		shopApi.getShoptList({}).then((res) => {
			setLoading(false);
			if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
				let data: IShopListResponse = res?.data;
				setListShop(data?.payload?.shop)
			} else {
				Notify.error(res?.data?.message);
			}
		})
	}, []);

	return (
		<div className="pt-5 mx-3">
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
						listShop ? listShop.map((shop: IShopInformation, index) => {
							return <tr>
								<td>{index + 1}</td>
								<td><img className='rounded-circle' src={shop?.logo} style={{ width: 30 }} alt={shop.logo} /></td>
								<td>{shop.name}</td>
								<td>{shop.address}</td>
								<td className='align-middle'>
									<button className='btn'><i className="fa fa-edit text-dark"></i></button>
									<button className='btn'><i className="fa fa-trash text-dark"></i></button>
								</td>
							</tr>
						}) : <tr><td>{t('noShop')}</td></tr>
					}
				</tbody>
			</table>
		</div>
	);

}
export default memo(ShopList);