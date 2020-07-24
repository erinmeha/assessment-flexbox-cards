## 
+ If I want to render some JSX on the page:
    -Then I will call ReactDOM.render, and pass it the top-level element or component I want rendered, and the element (already on the page) to append this to. '''js ReactDOM.render(element, parentElement)'''

+ If I want multi-line JSX:
    - I will wrap the whole JSX expression in parentheses.

## Components
+ If I want just a simple component, perhaps taking some inputs, but only giving the output, and not requiring anything fancy: 
    - I will write a functional component.
+ If I want a *smart* component, perhaps maintaining its own internal logic and data (stage):
    - I will write a class component.
+ If I have some unique input which I want wach instance of this component to have:
    - I will create a prop in the JSX (looks like HTML attribute), and in my component definition, I will accept those props as the 'props' paramenter (in a functional component) or 'this.props' (in a class component). My "attribute name" from the JSX will be the property name in the 'props'/