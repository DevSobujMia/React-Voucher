import moment from 'moment';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='flex justify-between text-center items-center'>
            <img className='max-w-52' src={logo} alt="" />
            <p className="text-2xl mt-2 mb-6">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;