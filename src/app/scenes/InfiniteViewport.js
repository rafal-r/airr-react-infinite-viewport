import React from "react";
import { Scene } from "airr-react";
import HelloWorld, {
    viewName as HelloWorldViewName
} from "../views/HelloWorld";
import CommonView, {
    getNextCommonViewName,
    viewNameTpl as CommonViewNameTpl
} from "../views/CommonView";
import "../../css/InfiniteViewport.css";
import { colors } from "./colors";
import Options from "../ui/Options";

export default class InfiniteViewport extends Scene {
    constructor(props) {
        super(props);

        this.state = {
            //Scene state
            ...this.state,
            navbar: 1,
            backButton: true,
            activeViewName: HelloWorldViewName,
            views: [this.getFreshViewConfig(HelloWorldViewName)],
            children: this.renderTabsMenu,
            handleBackButton: this.backButtonHandler,
            handleBackBehaviourOnFirstView: this.backBehaviourOnFirstView,
            //Custom state
            showOptions: false,
            handleBackButtonString: "go back",
            handleBackButtonOnFirstViewString: "alert something"
        };
    }

    handleNextClick = () => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const number =
            this.state.views[this.state.views.length - 1].props.number + 1;

        this.changeView(CommonViewNameTpl, {
            children: "Common view number " + number,
            title: "View number " + number,
            color,
            style: { backgroundColor: color },
            number
        });
    };

    toggleOptions = () => {
        this.setState({ showOptions: !this.state.showOptions });
    };

    toggleGUIDisabled = () => {
        this.setState({ GUIDisabled: !this.state.GUIDisabled });
    };

    handleGUIDisableCoverChange = e => {
        this.setState({ GUIDisableCover: e.currentTarget.value });
    };

    handleClassNameChange = e => {
        this.setState({ className: e.currentTarget.value });
    };

    handleAnimationChange = e => {
        this.setState({ animation: e.currentTarget.value });
    };

    handleAnimationTimeChange = e => {
        this.setState({ animationTime: e.currentTarget.value });
    };

    toggleStackMode = () => {
        this.setState({ stackMode: !this.state.stackMode });
    };

    handleNavbarChange = e => {
        this.setState({ navbar: Number(e.currentTarget.value) });
    };

    handleNavbarHeightChange = e => {
        this.setState({ navbarHeight: Number(e.currentTarget.value) });
    };

    handleNavbarClassChange = e => {
        this.setState({ navbarClass: e.currentTarget.value });
    };

    toggleBackButton = () => {
        this.setState({ backButton: !this.state.backButton });
    };

    toggleBackButtonOnFirstView = () => {
        this.setState({
            backButtonOnFirstView: !this.state.backButtonOnFirstView
        });
    };

    handleBackButtonStringChange = e => {
        this.setState({ handleBackButtonString: e.currentTarget.value });
    };

    handleBackButtonOnFirstViewStringChange = e => {
        this.setState({
            handleBackButtonOnFirstViewString: e.currentTarget.value
        });
    };

    backButtonHandler = () => {
        const what2do = this.state.handleBackButtonString;

        switch (what2do) {
            case "none":
                return;

            case "alert something":
                alert("The back button was clicked");
                return;

            case "pop view":
                {
                    const activeViewIndex = this.state.views.findIndex(
                        view => view.props.name === this.state.activeViewName
                    );
                    const lastViewName = this.state.activeViewName;
                    const nextView = this.state.views[activeViewIndex - 1];

                    if (nextView) {
                        this.changeView(nextView.props.name).then(() =>
                            this.destroyView(lastViewName)
                        );
                    }
                }
                break;

            case "go back":
            default:
                {
                    const activeViewIndex = this.state.views.findIndex(
                        view => view.props.name === this.state.activeViewName
                    );
                    const nextView = this.state.views[activeViewIndex - 1];

                    if (nextView) {
                        this.changeView(nextView.props.name);
                    } else {
                        console.log(
                            "You are on first view. Can't go back anymore."
                        );
                    }
                }

                break;
        }
    };

    backBehaviourOnFirstView = () => {
        const what2do = this.state.handleBackButtonOnFirstViewString;

        switch (what2do) {
            case "none":
                return;

            case "log in console":
                console.log(
                    "Handling back button click on first view in stack!"
                );
                break;
            case "alert something":
            default:
                alert("Handling back button click on first view in stack!");
                return;
        }
    };

    renderTabsMenu = ({ views }) => {
        return (
            <>
                <div className="button-wrap">
                    <button onClick={this.toggleOptions}>
                        {this.state.showOptions ? "close" : "show"} options
                    </button>
                </div>
                <nav className="infinite-viewport-nav">
                    <div className="views-links">
                        {views.map(item => (
                            <span
                                style={item.props.style}
                                key={item.props.name}
                                onClick={() => {
                                    this.changeView(item.props.name);
                                }}
                                className={
                                    this.state.activeViewName ===
                                    item.props.name
                                        ? "active"
                                        : ""
                                }
                            >
                                {item.props.number}
                            </span>
                        ))}
                    </div>
                    <button className="add-new" onClick={this.handleNextClick}>
                        push new
                    </button>
                </nav>
                {this.state.showOptions && (
                    <Options
                        toggleOptions={this.toggleOptions}
                        GUIDisabled={this.state.GUIDisabled}
                        toggleGUIDisabled={this.toggleGUIDisabled}
                        GUIDisableCover={this.state.GUIDisableCover}
                        handleGUIDisableCoverChange={
                            this.handleGUIDisableCoverChange
                        }
                        className={this.state.className}
                        handleClassNameChange={this.handleClassNameChange}
                        animation={this.state.animation}
                        handleAnimationChange={this.handleAnimationChange}
                        animationTime={this.state.animationTime}
                        handleAnimationTimeChange={
                            this.handleAnimationTimeChange
                        }
                        toggleStackMode={this.toggleStackMode}
                        stackMode={this.state.stackMode}
                        navbar={this.state.navbar}
                        handleNavbarChange={this.handleNavbarChange}
                        navbarHeight={this.state.navbarHeight}
                        handleNavbarHeightChange={this.handleNavbarHeightChange}
                        navbarClass={this.state.navbarClass}
                        handleNavbarClassChange={this.handleNavbarClassChange}
                        toggleBackButton={this.toggleBackButton}
                        backButton={this.state.backButton}
                        toggleBackButtonOnFirstView={
                            this.toggleBackButtonOnFirstView
                        }
                        backButtonOnFirstView={this.state.backButtonOnFirstView}
                        handleBackButtonString={
                            this.state.handleBackButtonString
                        }
                        handleBackButtonStringChange={
                            this.handleBackButtonStringChange
                        }
                        handleBackBehaviourOnFirstViewString={
                            this.state.handleBackBehaviourOnFirstViewString
                        }
                        handleBackButtonOnFirstViewStringChange={
                            this.handleBackButtonOnFirstViewStringChange
                        }
                    />
                )}
            </>
        );
    };

    viewsConfig = {
        [HelloWorldViewName]: {
            type: HelloWorld,
            props: {
                name: HelloWorldViewName,
                number: 1,
                title: "Hello World!",
                color: "white",
                style: { backgroundColor: "white" },
                toggleOptions: this.toggleOptions
            },
            sceneProps: {
                //to change scene state when needed (eg. when activated)
            }
        },
        [CommonViewNameTpl]: {
            type: CommonView,
            nameGenerator: getNextCommonViewName,
            props: { name: null, toggleOptions: this.toggleOptions },
            sceneProps: {
                //to change scene state when needed (eg. when activated)
            }
        }
    };
}
