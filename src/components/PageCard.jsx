import RequirementList from './RequirementList';

export default function PageCard({ page }) {
    return (
        <div className="PageCard">
            <div className="card-content">
                
                <div className="card-left">
                    <h2>{page.title}</h2>

                    <label htmlFor="page-status">Page status:</label>
                    <select name="page-status" defaultValue={page.status}>
                        <option value="not-requested">Not requested</option>
                        <option value="waiting">Waiting on client</option>
                        <option value="needs-review">Needs review</option>
                        <option value="ready">Ready to build</option>
                    </select>

                    <div className="priority">
                        <div className="priority-title">Priority</div>
                        <div className="priority-level">{page.priority}</div>
                    </div>
                </div>

                <div className="card-right">
                    <div className="requirements">
                        <RequirementList type="copy" />
                        <RequirementList type="assets" />
                    </div>

                    <p className="notes">
                        {page.notes}
                    </p>
                </div>
            </div>
        </div>
    )
}
