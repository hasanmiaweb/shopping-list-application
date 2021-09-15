import { Redirect, Router} from "@reach/router"
import NotFound from "../pages/NotFound/NotFound"
import BucketDatailPage from "../pages/bucket-details";
import BucketPage from "../pages/buckets";
const AppRouter = () => {
    return (
        <>
            <Router>
            <Redirect from="buckets" to="/" noThrow />
                <BucketPage path='/'/>
                <BucketDatailPage path='/buckets/:bucketID'/>
                <NotFound default/>
            </Router>
        </>
    );
};

export default AppRouter;