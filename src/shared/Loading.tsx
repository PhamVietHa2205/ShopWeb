import Backdrop from '@mui/material/Backdrop';

const Loading = (props: any) => {
    const { loading } = props;

    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
            <div className="spinner-grow text-success mr-2" role="status"></div>
            <div className="spinner-grow text-warning mr-2" role="status"></div>
            <div className="spinner-grow text-danger" role="status"></div>
        </Backdrop>
    );
}
export default Loading;