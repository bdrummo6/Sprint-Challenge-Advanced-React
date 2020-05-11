
- [X] Why would you use class component over function components (removing hooks from the question)?

    Future projects we may work on may still use class components so we need to be familiar on how to use them. The Component base class
    provides methods dealing with the React Component Lifecycle, which can make it useful.

- [X] Name three lifecycle methods and their purposes.

    constructor: The purpose of the constructor in React is to set the initial state data for a component, which will be used in the initial
                 render.
                 
    render: The purpose of the render method is to return a portion of DOM to be rendered to the screen. The method is called during the initial 
            mount and everytime the component is updated.
            
    componentDidMount: The componentDidMount method is called during the mounting phase when the render method is called initially. All 
                       asynchronous actions should be performed within this method, especially when fetching data via HTTP.     
                 
- [X] What is the purpose of a custom hook?

    The purpose of a custom hook is to allow us to apply non-visual behavior and stateful logic throughout our components.

- [X] Why is it important to test our apps?

    Testing our apps is important so that we catch bugs so they do not end up in our production code.