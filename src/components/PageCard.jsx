import RequirementList from './RequirementList';

export default function PageCard({ page }) {
    return (
        <div className="PageCard">
            <div className="card-content">
                
                <div className="card-left">
                    <h2>{page.title}</h2>

                    <span>Status: </span>
                    <span>{page.status}</span>

                    <div className="priority">
                        <div className="priority-title">Priority</div>
                        <div className="priority-level">{page.priority}</div>
                    </div>
                </div>

                <div className="card-right">
                    <div className="requirements">
                        <RequirementList type="Copy" requirements={page.requirements.copy} />
                        <RequirementList type="Assets" requirements={page.requirements.assets} />
                    </div>

                    <p className="notes">
                        {page.notes}
                    </p>
                </div>
            </div>
        </div>
    )
}
