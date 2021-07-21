import '../App.css';

function Title(props) {
    return (
        <div className="title-container">
            <h2 className="title">{props.text}</h2>
        </div>
    );
}

export default Title;