import Header from './Header';
import Filters from './Filters';
import PageGrid from './PageGrid';
import pages from '../data/pages.js';

export default function App() {
    return (
        <div className="App">
            <Header />
            <Filters />
            <PageGrid pages={pages} />
        </div>
    )
}