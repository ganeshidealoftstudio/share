import "./App.css";

function App() {
  const handleonsubmit = async () => {
    const response = await fetch("https://picsum.photos/200/300");
    // here image is url/location of image
    // const blob = await response.blob();
    // const file = new file([blob], "share.jpg", { type: blob.type });
    // console.log(file);
    console.log("here");
    if (navigator.share) {
      await navigator
        .share({
          title: "title",
          text: "your text",
          url: "url to share",
          files: "https://picsum.photos/200/300",
        })
        .then(() => console.log("successful share"))
        .catch((error) => console.log("error in sharing", error));
    } else {
      console.log(`system does not support sharing files.`);
    }
  };
  return (
    <div className="App">
      <h1>ganesh</h1>
      <h2 onClick={handleonsubmit}>click here</h2>
      <img src="https://picsum.photos/200/300" alt="hre" />
    </div>
  );
}

export default App;
