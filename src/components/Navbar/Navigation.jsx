import React from "react";
import "./Navigation.css";
import { Link, withRouter } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "./icons/logo.png";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const JoinButton = withStyles({
    root: {
        boxShadow: "none",
        textTransform: "none",
        fontSize: 16,
        padding: "6px 12px",
        border: "1px solid",
        lineHeight: 1.5,
        backgroundColor: "#b01c33",
        color: "white",
        "&:hover": {
            backgroundColor: "#c73046",
            borderColor: "#b01c33",
            boxShadow: "none",
        },
        "&:active": {
            boxShadow: "none",
            backgroundColor: "#b01c33",
            borderColor: "#b01c33",
        },
        "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(135, 22, 38,.5)",
        },
    },
    label: {
        textTransform: "capitalize",
    },
})(Button);

const MyNavLink = styled(Link)`
    font-size: 20px;
    font-weight: bolder;
    color: black;
    margin-left: 15px;
    text-decoration: none;
    display: inline-block;
    position: relative;
    ::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #b01c33;
        transform-origin: bottom right;
        transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }
    :hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

const HomeLink = styled(MyNavLink)`
    margin-left: 0;
`;

function Navigation(props) {
    return (
        <nav className="navbar">
            <Link className="acsu-logo-wrapper" to="/">
                <img src={logo} alt="ACSU logo" className="acsu-logo-img"></img>
            </Link>
            <div className="container">
                <MyNavLink className="nav-button" to="/board">
                    Board
                </MyNavLink>
                <MyNavLink className="nav-button" to="/sponsers">
                    Sponsors
                </MyNavLink>
                <MyNavLink className="nav-button" to="/resources">
                    Resources
                </MyNavLink>
                <JoinButton className="nav-button">Join Us!</JoinButton>
            </div>
        </nav>
    );
}

export default withRouter(Navigation);
