import React, {Component, Fragment} from "react";
import Preface from "../Pages/Preface"
import FAQ from "../Pages/FAQ"
import Courses from "../Pages/Courses"
import Clubs from "../Pages/Clubs"
import Research from "../Pages/Research"
import Graduate from "../Pages/Graduate"
import Anecdotes from "../Pages/Anecdotes"

class Section extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
    let heading = null;
    let section = null;
    const current = this.props.current;
    switch(current){
        case 0:
            heading = "Preface";
            section = <Preface />
            break;
        case 1:
            heading = "FAQ";
            section = <FAQ />
            break;
        case 2:
            heading = "Courses";
            section = <Courses />
            break;
        case 3:
            heading = "Clubs";
            section = <Clubs />
            break;
        case 4:
            heading = "Research";
            section = <Research />
            break;
        case 5:
            heading = "Graduate";
            section = <Graduate />
            break;
        case 6:
            heading = "Anecdotes";
            section = <Anecdotes />
            break;
    }
    return(
        <div class="Section">
            <h1>{heading}</h1>
            <div class="Body">{section}</div>
        </div>
    )
    }
}

export default Section;