import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Pagination from "react-js-pagination";

interface IPaginationProps {
    totalItem: number,
    currentPage: number,
    changePage: (item: any) => void,
}

const PaginationPage = (props: IPaginationProps) => {
    const { totalItem, currentPage, changePage } = props;
    const { t } = useTranslation();

    return <Pagination
        innerClass="pagination justify-content-center mb-3"
        itemClass="page-item"
        linkClass="page-link"
        activeClass="active"
        activePage={currentPage}
        totalItemsCount={totalItem}
        itemsCountPerPage={9}
        pageRangeDisplayed={5}
        hideNavigation={totalItem <= 9}
        firstPageText="&laquo;"
        lastPageText="&raquo;"
        prevPageText="<"
        nextPageText=">"
        onChange={changePage}
    />
}

export default memo(PaginationPage);