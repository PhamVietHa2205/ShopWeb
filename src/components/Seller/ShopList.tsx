import { useTranslation } from 'react-i18next';
import { CATEGORY_TYPE } from '../../constants/key_local';
import { memo, useEffect } from 'react';
import shopApi from '../../api/seller/shop-api';
import { HttpCode } from '../../constants/key_local';
import { IShopListResponse } from '../../interfaces/seller-interface';
import * as Notify from '../../shared/Notify';

interface IShopListProps {
	setLoading: (loading: boolean) => void,
}

const ShopList = (props: IShopListProps) => {
	const { setLoading } = props;
	const { t } = useTranslation();

	useEffect(() => {
		setLoading(true);
		shopApi.getShoptList({}).then((res) => {
			setLoading(false);
			if (res?.status === HttpCode.OK && res?.data?.code !== -1) {
				let data: IShopListResponse = res?.data;
			} else {
				Notify.error(res?.data?.message);
			}
		})
	}, []);

	const listOfProduct = [
		{
			type: CATEGORY_TYPE.MEN_DRESSES,
			count: 5,
		},
		{
			type: CATEGORY_TYPE.WOMAN_DRESSES,
			count: 10,
		},
		{
			type: CATEGORY_TYPE.BABY_DRESSES,
			count: 15,
		},
		{
			type: CATEGORY_TYPE.ACCESSORIES,
			count: 20,
		},
		{
			type: CATEGORY_TYPE.BAGS,
			count: 25,
		},
		{
			type: CATEGORY_TYPE.SHOES,
			count: 30,
		}
	];

	const getCategoryImage = (type: any) => {
		switch (type) {
			case CATEGORY_TYPE.MEN_DRESSES:
				return "img/cat-1.jpg";
			case CATEGORY_TYPE.WOMAN_DRESSES:
				return "img/cat-2.jpg";
			case CATEGORY_TYPE.BABY_DRESSES:
				return "img/cat-3.jpg";
			case CATEGORY_TYPE.ACCESSORIES:
				return "img/cat-4.jpg";
			case CATEGORY_TYPE.BAGS:
				return "img/cat-5.jpg";
			case CATEGORY_TYPE.SHOES:
				return "img/cat-6.jpg";
			default:
				return "img/cat-1.jpg";
		}
	}

	return (
		<div className="container-fluid pt-5">
			<div className="row px-xl-5 pb-3">
				{
					listOfProduct.map((item, index) => {
						return <div className="col-lg-4 col-md-6 pb-1" key={index}>
							<div className="cat-item d-flex flex-column border mb-4" style={{ padding: 30 }}>
								<p className="text-right">{`${item.count} ${t('products')}`}</p>
								<a href="" className="cat-img position-relative overflow-hidden mb-3">
									<img className="img-fluid" src={require(`../../assets/${getCategoryImage(item.type)}`)} alt="" />
								</a>
								<h5 className="font-weight-semi-bold m-0">{t(`${item.type}`)}</h5>
							</div>
						</div>
					})
				}
			</div>
		</div>
	)
}
export default memo(ShopList);