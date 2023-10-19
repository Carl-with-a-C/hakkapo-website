import Table from "../Multimedia/Images/menu-wood.jpg";

const Menu = () => {
  return (
    <section className="menu">
      <div className="table-container">
        <img src={Table} alt="wodden table surface" />
      </div>
      <div className="menu-container">
        <div className="menu-card"></div>
      </div>
    </section>
  );
};

export default Menu;
