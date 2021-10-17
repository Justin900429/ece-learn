import NavbarCustom from "./components/Navbar/navbar";
import {useState} from "react";
import List from "./components/List/List";
import "./App.css"
import Footer from "./components/Footer/footer";


function App(props) {
    const [height, setHeight] = useState("48");
    const [displayData, setDisplayData] = useState(props.ori);

    const setStickHandler = (heightValue) => {
        setHeight(heightValue);
    }

    const setGradeClick = (grade) => {
        const decodeGrade = (grade) => {
            if (grade === "大一") return "first";
            if (grade === "大二") return "second";
            if (grade === "大三") return "third";
            if (grade === "大四") return "fourth";
        }

        const filter_list = props.ori.filter(data => decodeGrade(data[0]) === grade)
        setDisplayData(filter_list);
    }

    const setTextChange = (text) => {
        const reg = new RegExp(text, "gi");

        const filter_list = props.ori.filter(data => {
            for (let i = 0; i < data.length; ++i) {
                if (data[i].match(reg)) return true;
            }
            return false;
        })
        setDisplayData(filter_list);
    }

    return (
        <div className="App">
            <NavbarCustom
                stickHandler={setStickHandler} gradeClick={setGradeClick}
                textChange={setTextChange}
            />
            <List stickyTop={height} items={displayData}/>
            <Footer/>
        </div>
    );
}

export default App;
