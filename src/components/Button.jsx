import '../App.css';

function Button (props) {
    const {
        type, 
        onClick, 
        text
    } = props;
    return (
        <div className="button-cont">
            <button 
                type={type} 
                onClick={onClick} 
                className="link"
            >
                {text}
            </button>
        </div>
    );
}

export default Button;