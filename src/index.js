import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "./title.css";

const section = [
  {
    name: "first section",
    imageName: "images/image-1.jpg",
    description: `<h2>Introducing the</h2><h1>Hot Pic</h1><p>A revolutionary solution inspired by the latest trends in natural ethnic hair styles.</p>`,
  },
  {
    name: "second section",
    imageName: "images/people-1.jpg",
    description:
      " <p>Caring for natural hair often involves purchasing numerous lotions, oils, and products, leading to a cumbersome routine. The Hot Pic doesn't aim to replace these products but offers an additional option for maintaining a stylish natural look.</p>",
  },
  {
    name: "third section",
    imageName: "images/image-2.jpg",
    description:
      "<p>Designed as a temperature-controlled hair comb, the Hot Pic gently treats hair with warm to moderate heat, minimizing damage and breakage. Its unique features, including heated prongs and rounded heat retardant guards, make detangling and styling effortless, especially when paired with a little hair oil.</p>",
  },
  {
    name: "fourth section",
    imageName: "images/people-2.jpg",
    description:
      "<p>For individuals with very curly or wavy hair (including children and teenagers). Beauticians and barbers can also benefit from using the Hot Pic to prep and style hair effectively.</p>",
  },
  {
    name: "fifth section",
    imageName: "images/image-3.jpg",
    description:
      "<p>Unlike traditional tools like the pressing comb, flat iron, or blow dryer, which focus on straightening hair, the Hot Pic is designed specifically for detangling and texturizing curly hair without causing damage or brittleness.</p>",
  },
];

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  const textItems = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="text">
      Hot Pic
    </div>
  ));

  return <header>{textItems}</header>;
}

function Main() {
  return (
    <main>
      <Sections />
      <Diagram />
      <Conclusion />
    </main>
  );
}

function Sections() {
  return (
    <>
      {section.map((sectionObj) => (
        <Sectioner sectionObj={sectionObj} key={sectionObj.name} />
      ))}
    </>
  );
}

function Sectioner({ sectionObj }) {
  return (
    <>
      <div className="group">
        <div className="imageDiv">
          <img src={sectionObj.imageName} alt={sectionObj.name} />
        </div>{" "}
        <div
          className="descrip"
          dangerouslySetInnerHTML={{ __html: sectionObj.description }}
        />
      </div>
    </>
  );
}

function Diagram() {
  return (
    <>
      <img
        id="diagram"
        src="https://camkol.github.io/hotpic/images/image-4.jpg"
        alt="diagram"
      />
    </>
  );
}

function Conclusion() {
  return (
    <>
      <div id="grouper">
        <div id="descriper">
          <p>
            Join the revolution in ethnic hair care with the Hot Pic – the
            ultimate solution for maintaining natural, stylish hair with ease
            and confidence.
          </p>
        </div>
        <div id="imageDiver">
          <img
            src="https://camkol.github.io/hotpic/images/people-3.jpg"
            alt="person 1"
          />
          <img
            src="https://camkol.github.io/hotpic/images/people-4.jpg"
            alt="person 2"
          />
          <img
            src="https://camkol.github.io/hotpic/images/people-5.jpg"
            alt="person 3"
          />
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {" "}
      <div id="copy">
        <p>&copy; 2024 Hot Pic. All rights reserved</p>
      </div>
      <div id="terms">
        <a href="/placement">Terms</a>
        <a href="/placement">Privacy</a>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
