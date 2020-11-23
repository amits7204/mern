export default function Home() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "80px",
          width: "80px",
          borderRadius: "50%",
          position: "absolute",
          top: "40%",
          left: "45%",
          margin: "-25px 0 0 -25px",
          boxShadow: "-4px -4px 12px 0px #ef5350, 3px 4px 12px 0px #f06292",
        }}
      >
        <img
          src="https://cdn.svgporn.com/logos/codeschool.svg"
          height="30px"
          width="30px"
          style={{
            position: "absolute",
            top: "62%",
            left: "62%",
            margin: "-25px 0 0 -25px",
          }}
        />
        <p
          style={{
            marginLeft: "140%",
            marginRight: "140%",
            fontWeight: "bolder",
            fontSize: "18px",
            color: "#e8f5e9",
          }}
        >
          Apache
        </p>
      </div>
    </div>
  );
}
