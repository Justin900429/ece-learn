import NavbarCustom from "./components/Navbar/navbar";
import {useState} from "react";
import "./App.css"
import List from "./components/List/List";
import Footer from "./components/Footer/footer";
import Note from "./components/Note/note"


function App(props) {
    const [height, setHeight] = useState("48");
    const [displayData, setDisplayData] = useState(props.ori);
    const [showList, setShowList] = useState(false);

    const setStickHandler = (heightValue) => {
        setHeight(heightValue);
    }

    const setGradeClick = (value) => {
        if (value === "readme") {
            setShowList(false);
        } else{
            setShowList(true);
            const decodeGrade = (value) => {
                if (value === "大一") return "first";
                if (value === "大二") return "second";
                if (value === "大三") return "third";
                if (value === "大四") return "fourth";
            }

            const filter_list = props.ori.filter(data => decodeGrade(data[0]) === value)
            setDisplayData(filter_list);
        }
    }

    const setTextChange = (text) => {
        setShowList(true);
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
            { showList ?
                <List display={showList? "block" : "none" } stickyTop={height} items={displayData}/> :
                <Note display={showList? "none" : "block" }/>
            }
            <Footer/>
        </div>
    );
}

export default App;
