import RequirementList from './RequirementList';

export default function PageCard() {
    return (
        <div className="PageCard">
            <div className="card-content">
                
                <div className="card-left">
                    <h2>Home</h2>

                    <label htmlFor="page-status">Page status:</label>
                    <select name="page-status" defaultValue="needs-review">
                        <option value="not-requested">Not requested</option>
                        <option value="waiting">Waiting on client</option>
                        <option value="needs-review">Needs review</option>
                        <option value="ready">Ready to build</option>
                    </select>

                    <div className="priority">
                        <div className="priority-title">Priority</div>
                        <div className="priority-level">High</div>
                    </div>
                </div>

                <div className="card-right">
                    <div className="requirements">
                        <RequirementList type="copy" />
                        <RequirementList type="assets" />
                    </div>

                    <p className="notes">
                        Not yet begun.
                    </p>
                </div>
            </div>
        </div>
    )
}
