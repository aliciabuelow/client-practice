import '../styles/RequirementList.css';

export default function RequirementList({ type, requirements }) {
    return (
        <div className="RequirementList">
            <h3 className="requirement-title">{type}</h3>
            {requirements.map((requirement) => (
                <ul>
                    <li key={requirement.id}>
                        <span
                            className={`requirement-marker ${
                                requirement.received ? "received" : "missing"
                            }`}
                            aria-hidden="true"
                        ></span>
                         
                        {requirement.label} 
                    </li>
                </ul>
            ))}
        </div>
    )
}
