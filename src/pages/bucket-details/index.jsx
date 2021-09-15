import NavigationBar from "../../Components/nav";
import CreateItem from "../../Components/create";
import Table from "../../Components/table";
const BucketDatailPage = () => {
  return (
    <>
      {/* Navigation Bar Start */}
      <NavigationBar />
      {/* Navigation Bar End */}
      {/* Main Page Content */}
      <main className="container __margin--ylg">
        {/* Add Item */}
        <CreateItem extra={true} label="Add New Item"/>
        {/* suggestion  */}
        {/* Item Table */}
        <section className="section table __shadow--sm">
          <Table/>
        </section>
        {/* Success Table */}
        <section className="section table table--success __shadow--sm">
          <Table/>
        </section>
      </main>
    </>
  );
};

export default BucketDatailPage;
