export default function RequirementList({ type, requirements }) {
    return (
        <div className="RequirementList">
            <h3 className="requirement-title">{type}</h3>
            {requirements.map((requirement) => (
                <p key={requirement.id}>{requirement.label}</p>
            ))}
        </div>
    )
}
