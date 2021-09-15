import NavigationBar from "../../Components/nav";
import CreateItem from "../../Components/create";
import Table from "../../Components/table";
const BucketPage = () => {
  return (
    <div>
      {/* Navigation Bar Start */}
      <NavigationBar />
      {/* Navigation Bar End */}
      {/* Main Content Body */}
      <main className="container __margin--ylg">
        {/* Add New bucket Section */}
          <CreateItem extra={false} label="Add New Bucket"/>
        {/* Bucket List Table */}
        <div className="section table __shadow--sm">
          <Table/>
        </div>
      </main>
    </div>
  );
};

export default BucketPage;
