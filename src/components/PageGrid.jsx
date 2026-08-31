import PageCard from './PageCard';

export default function PageGrid({ pages }) {
    return (
        <div className="PageGrid">
            {pages.map((page) => (
                <PageCard key={page.id} page={page} />
            ))}
        </div>
    )
}
