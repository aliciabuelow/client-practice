import Header from './Header';
import Filters from './Filters';
import PageGrid from './PageGrid';
import pages from '../data/pages.js';

export default function App() {
    const readyPages = pages.filter((page) => page.status === "ready");
    const readyCount = readyPages.length;
    const totalPages = pages.length;


    return (
        <div className="App">
            <Header readyCount={readyCount} totalPages={totalPages} />
            <Filters />
            <PageGrid pages={pages} />
        </div>
    )
}