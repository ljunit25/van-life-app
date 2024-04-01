import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Button color="btnColorSecondary">Find your van</Button>
      </main>
     <Footer />
    </>
  );
};

export default Home;
