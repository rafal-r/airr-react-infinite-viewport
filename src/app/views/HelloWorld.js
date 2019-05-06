import React from "react";
import { View } from "airr-react";
import "../../css/HelloWorld.css";

export const viewName = "hello-world-view";

export default class HelloWorld extends View {
    content() {
        const content =
            typeof this.props.render === "function"
                ? this.props.render()
                : typeof this.props.children === "function"
                ? this.props.children()
                : this.props.children;

        return (
            <div className={viewName}>
                {content ? content : "What up!"}
            </div>
        );
    }
}
