import "./App.css";

function App() {
  const handleonsubmit = async () => {
    const files = "https://picsum.photos/200/300";
    if (!navigator.canShare) {
      console.log("Your browser doesn't support the Web Share API");
      return;
    }

    if (navigator.canShare({ files })) {
      try {
        await navigator.share({
          files,
          title: "Images",
          text: "Beautiful images",
        });
        console.log("shared shared");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Your system doesn't support sharing these files");
    }
  };
  return (
    <div className="App">
      <h1>ganesh</h1>
      <h2 onClick={handleonsubmit}>click here ggg</h2>
      <img src="https://picsum.photos/200/300" alt="hre" />
    </div>
  );
}

export default App;
