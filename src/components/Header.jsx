import '../styles/Header.css';

export default function Header({ readyCount, totalPages }) {
    return (
        <div className="Header">
            <div className="subheading">Client Project</div>
            <h1 className="title">Sandy's Website</h1>
            <div className="counter">{readyCount}/{totalPages} pages ready to build</div>
        </div>
    )
}
