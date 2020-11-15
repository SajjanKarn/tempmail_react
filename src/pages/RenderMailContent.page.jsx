import Navbar from "../components/navbar/navbar.component";

const RenderMailContent = ({ match }) => {
  console.log(match);
  return (
    <div className="mail-content">
      <Navbar />
      <p>Hello there!</p>
    </div>
  );
};

export default RenderMailContent;
