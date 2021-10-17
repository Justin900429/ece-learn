import classes from "./note.module.css"

const Note = () => {
    return (
        <div className={classes["note-layout"]}>
            <h2>A. 使用說明</h2>
            <p>1. 考古資源是眾多學長姐慢慢累積出來的，請不要惡意使用。</p><br/>

            <h2>B. 網站建議</h2>
            <p><a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfn5uEo1MefhezayHOvvfWoIlAKJ7XvnKiUSaXXdDE0cLPAag/viewform?usp=pp_url">
                表單</a>
            </p>
            <p>&bull; <span style={{backgroundColor: "#FFD31D"}}>你們可以填你們想要的功能或考古，但是能不能實現就不一定了🥲</span></p><br/>

            <h2>C. 考古提供</h2>

        </div>
    );
};

export default Note;