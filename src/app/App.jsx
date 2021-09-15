import { Helmet } from "react-helmet";
// Custom Components
import AppRouter from "./router";
function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <AppRouter/>
    </>
  );
}

export default App;
