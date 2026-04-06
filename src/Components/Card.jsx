
function Card(props) {
  return (
    <>
      <section className="m-8 pl-8">
        <div
          className="bg-white w-64 h-32 p-6  rounded-lg"
          style={{ backgroundColor: "#FFF5EA" }}
        >
          <h1 className="font-poppins text-2xl " style={{ color: "#968C83" }}>
            {props.title}
          </h1>
          <p
            className="font-poppins text-2xl mt-3 items-center"
            style={{ color: props.color }}
          >
            {props.value}
          </p>
        </div>
      </section>
    </>
  );
}
export default Card;
