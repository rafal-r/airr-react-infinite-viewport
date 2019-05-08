import React from "react";

export default React.memo(function Options({
    toggleOptions,
    GUIDisabled,
    toggleGUIDisabled,
    GUIDisableCover,
    handleGUIDisableCoverChange,
    className,
    handleClassNameChange,
    animation,
    handleAnimationChange,
    animationTime,
    handleAnimationTimeChange,
    toggleStackMode,
    stackMode,
    navbar,
    handleNavbarChange,
    navbarHeight,
    navbarClass,
    handleNavbarClassChange,
    toggleBackButton,
    backButton,
    toggleBackButtonOnFirstView,
    backButtonOnFirstView,
    handleBackButtonString,
    handleBackButtonStringChange,
    handleNavbarHeightChange,
    handleBackButtonOnFirstViewString,
    handleBackButtonOnFirstViewStringChange,
    navbarMenu,
    handleNavbarMenuChange
}) {
    return (
        <div className="options">
            <div>
                GUIDisabled:{" "}
                <input
                    type="checkbox"
                    onChange={toggleGUIDisabled}
                    checked={GUIDisabled}
                />
            </div>
            <div>
                GUIDisableCover:{" "}
                <input
                    type="text"
                    value={GUIDisableCover || ""}
                    onChange={handleGUIDisableCoverChange}
                />
            </div>
            <div>
                className:{" "}
                <input
                    type="text"
                    value={className}
                    onChange={handleClassNameChange}
                />
            </div>
            <div>
                animation:{" "}
                <select value={animation} onChange={handleAnimationChange}>
                    <option value="overlay">overlay</option>
                    <option value="fade">fade</option>
                    <option value="slide">slide</option>
                </select>
            </div>
            <div>
                animationTime (ms):{" "}
                <input
                    type="number"
                    value={animationTime}
                    onChange={handleAnimationTimeChange}
                    min="100"
                    max="100000"
                />
            </div>
            <div>
                stackMode:{" "}
                <input
                    type="checkbox"
                    onChange={toggleStackMode}
                    checked={stackMode}
                />
                (takes effect only when 'overlay' animation set)
            </div>
            <div>
                navbar:{" "}
                <select value={navbar} onChange={handleNavbarChange}>
                    <option value="1">enabled</option>
                    <option value="-1">hidden</option>
                    <option value="0">none</option>
                </select>
            </div>
            <div>
                navbarHeight:{" "}
                <input
                    type="range"
                    min="0"
                    max="200"
                    value={navbarHeight}
                    onChange={handleNavbarHeightChange}
                />
            </div>
            <div>
                navbarClass:{" "}
                <select value={navbarClass} onChange={handleNavbarClassChange}>
                    <option value="">none</option>
                    <option value="grey-bg">grey-bg</option>
                    <option value="yellow-bg">yellow-bg</option>
                </select>
            </div>
            <div>
                navbarMenu:{" "}
                <select value={navbarMenu || ""} onChange={handleNavbarMenuChange}>
                    <option value="">none</option>
                    <option value="toggleSidepanel">toggle sidepanel</option>
                </select>
            </div>
            <div>
                backButton:{" "}
                <input
                    type="checkbox"
                    onChange={toggleBackButton}
                    checked={backButton}
                />
            </div>
            <div>
                backButtonOnFirstView:{" "}
                <input
                    type="checkbox"
                    onChange={toggleBackButtonOnFirstView}
                    checked={backButtonOnFirstView}
                />
            </div>
            <div>
                handleBackButton:{" "}
                <select
                    value={handleBackButtonString}
                    onChange={handleBackButtonStringChange}
                >
                    <option value="go back">go back</option>
                    <option value="pop view">pop view</option>
                    <option value="alert something">alert something</option>
                    <option value="none">none</option>
                </select>
            </div>
            <div>
                handleBackButtonOnFirstView:{" "}
                <select
                    value={handleBackButtonOnFirstViewString}
                    onChange={handleBackButtonOnFirstViewStringChange}
                >
                    <option value="alert something">alert something</option>
                    <option value="log in console">log in console</option>                    
                    <option value="none">none</option>
                </select>
            </div>
            <div className="close-wrap">
                <button onClick={toggleOptions}>close options</button>
            </div>
        </div>
    );
});
