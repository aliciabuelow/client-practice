import '../styles/PageCard.css';
import RequirementList from './RequirementList';

export default function PageCard({ page }) {
    return (
        <div className="PageCard" data-status={page.status}>
            <div className="card-content">
                
                <div className="card-left">
                    <h2>{page.title}</h2>

                    <div className="status-title">Status</div>
                    <div className="status-level">{page.status}</div>

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
