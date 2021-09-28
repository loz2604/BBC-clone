
import './BBC-clone.css';
import nurse from "./images/nurse.PNG";
import twoNurses from "./images/twoNurses.PNG";
import celeb from "./images/celeb.PNG";
import celeb2 from "./images/celeb2.PNG";
import lady from "./images/lady.PNG";
import clock from "./images/clock-logo.jpg"
import comment from "./images/comment-icon.png"


// const App = () => {
//   return (
//     <div>
//       <h1>Hello Lorraine!</h1>
//       <p>Hi this is a react file.</p>
//       <p>Ooooh this is cool</p>
//       <Person></Person>
//       <h3><Person /></h3>
//       <Cat />
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//       <Welcome name="Stephen" />
//       <Comment author="Sasha" />
//       <Comment text="This is my comment" />
//     </div>
//   );
// }

// //  Using props

// const Welcome = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// }

// // Components can be split into smaller components

// const Comment = (props) => {
//   return (
//     <div className="Comment">
//       {props.author}
//       <div className="Comment-Text">
//         {props.text}
//       </div>
//     </div>
//   );
// }


// //  Component tree = App > Person > Hello

// const Person = () => {
//   return (
//     <h1>My name is Janet</h1>
//   )
// }

// const Hello = () => {
//   return (
//     <div>
//       <p>Hello Everybody!</p>
//       <p>This is a react page</p>
//     </div>

//   )
// }

// const Cat = () => {
//   return (
//     <div>
//       <h1>My cat is called Podrick</h1>
//       < Hello />
//     </div>
//   );
// }

//  Day two React

// const App = () => {
//   return (
//     <div>
//       <h1>I'm a class component</h1>
//       <Person name="Dan" age="34" />
//       <Person name="Stuart" age="30-something" />
//       <Person name="Ben" age="21" petsName="Bonnie" type="Dog" />
//       <Person name="Lorraine" />
//       <Job job="Junior Developer" />
//       <Images title = "" src = {}/>
//     </div>
//   );
// }

// const Person = (props) => {
//   return (
//     <div>
//       <p>Hi I'm {props.name}</p>
//       <Pet pet={props.petsName} />


//     </div>

//   );
// };

// const Job = (props) => {
//   return (
//     <p>I'm a {props.job}</p>
//   );
// };

// const Pet = (props) => {
//   return (
//     <div>
//       <p>Hi my name is {props.pet} </p>
//     </div>
//   );
// }

// const Images = (props) => {
//   return (
//     <div>
//       <img src={props.src} alt="" />
//       <h3>{props.title}</h3>
//     </div>
//   )
// }

//  Recreating a website

const App = () => {
  return (
    <div id="container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

const Container1 = (props) => {
  return (
    <div id="container1">
      <div id="image">
        <Image1 />
      </div>
      <div id="heading">
        <h4>Don't think the pandemic is over, Whitty warns</h4>
      </div>
      <div id="text">
        <p>Unlocking too quickly would lead to a substantial surge in infection, UK chief medical advisor says.</p>
      </div>
      <div id="bottomSection">
        <div id="time">
          <div id="clock">
            <img src={clock} alt="clock" />
          </div>
          <div>
            <p>2h</p>
          </div>
        </div>
        <div id="topic">
          <p>Health</p>
        </div>
        <div id="logo">
          <img src={comment} alt="comments logo" />
        </div>
      </div>
    </div>
  )
}

const Container2 = () => {
  return (
    <div id="container2">
      <div id="image">
        <Image2 />
      </div>
      <div id="heading">
        <h4>Pay rise was set to be 2.1% - NHS chief</h4>
      </div>
      <div id="text">
        <p>NHS England boss backs ministers over pay dispute but does not rule out a one-off bonus for workers.</p>
      </div>
      <div id="bottomSection">
        <div id="time">
          <div id="clock">
            <img src={clock} alt="clock" />
          </div>
          <div>
            <p>1h</p>
          </div>
        </div>
        <div id="topic">
          <p>UK Politics</p>
        </div>
      </div>
    </div>

  );
}
const Container3 = () => {
  return (
    <div id="container3">
      <div id="image">
        <Image3 />
        <Image4 />
      </div>
      <div id="heading">
        <h4>Charity criticises Morgan's comments about Meghan</h4>
      </div>
      <div id="text">
        <p>Mental health charity Mind says it is "disappointed" by comments Piers Morgan made on Monday.</p>
      </div>
      <div id="bottomSection">
        <div id="time">
          <div id="clock">
            <img src={clock} alt="clock" />
          </div>
          <div>
            <p>2h</p>
          </div>
        </div>
        <div id="topic">
          <p>Entertainment & Arts</p>
        </div>
      </div>
    </div>
  );
}
const Container4 = () => {
  return (
    <div id="container4">
      <div id="image">
        <Image5 />
      </div>
      <div id="heading">
        <h4>Unilever drops word 'normal' from beauty products.</h4>
      </div>
      <div id="text">
        <p>The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity.</p>
      </div>
      <div id="bottomSection">
        <div id="time">
          <div id="clock">
            <img src={clock} alt="clock" />
          </div>
          <div>
            <p>10m</p>
          </div>
        </div>
        <div id="topic">
          <p>Business</p>
        </div>
      </div>
    </div>
  );
}

const Image1 = (props) => {
  return (
    <img src={nurse} alt="Nurse" />
  );
}
const Image2 = (props) => {
  return (
    <img src={twoNurses} alt="Two Nurses" />
  );
}
const Image3 = (props) => {
  return (
    <img src={celeb} alt="Celeb" />
  );
}
const Image4 = (props) => {
  return (
    <img src={celeb2} alt="Another celeb" />
  );
}
const Image5 = (props) => {
  return (
    <img src={lady} alt="Lady" />
  );
}

export default App;
