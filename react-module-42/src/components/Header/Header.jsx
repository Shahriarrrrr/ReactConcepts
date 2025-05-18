import panda from '../../assets/panda.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4  border-b-2'>
            <h1 className="text-4xl font-bold">REACT-MODULE-42-KnowledgeCafe</h1>
            <img src={panda} alt="" />
        </header>
    );
};

export default Header;