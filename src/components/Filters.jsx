import '../styles/Filters.css';

export default function Filters() {
    return (
        <div className="Filters">
            <div className="filter-bar">
                <button>All</button>
                <button>Not Requested</button>
                <button>Waiting</button>
                <button>Needs Review</button>
                <button>Ready To Build</button>
            </div>
        </div>
    )
}
