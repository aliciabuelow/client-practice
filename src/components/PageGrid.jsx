import '../styles/PageGrid.css';
import PageCard from './PageCard';

export default function PageGrid({ pages }) {
    return (
        <div className="PageGrid">
            <div className="page-grid">
                {pages.map((page) => (
                    <PageCard key={page.id} page={page} />
                ))}
            </div>
        </div>
    )
}
