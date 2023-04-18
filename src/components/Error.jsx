import './styles/error.css';

const Error = () => {

    return (
        <div className='error'>
            <div className='error__img'>
                <img src="/icon-error.png" alt="" />
            </div>
            <h2 className='error__title'>Hey! You must provide an number from 1 to 126</h2>
        </div>
    )
}

export default Error