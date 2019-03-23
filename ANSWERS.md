1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
   PropTypes are a bug checking mechanism used for type checking props passed 
   into components. Since dynamic typing & coercion are part of JavaScript, their benefits 
   also can cause a lot of problems(a passed index value is actually a string and incrementing
   it for a carousel breaks app). Flow & TypeScript are other ways to make sure of validating 
   the data type that is passed into components.
 
2. Describe a life-cycle event in React?
   React class components can have hooks for several lifecycle events that can be 
   called and provide customized functionality. There are 3 phases to a component 
   lifecycle (Mounting, Updating, Unmounting) Functions such as  ComponentDidMount, 
   getDerivedStateFromProps, componentDidUpdate, ComponentWillUnmount, allows components 
   to be added(mounted) or removed(unmounted) from the DOM. They help us control dynamic 
   state data especially when passing props into functional components(e.g. Tab, Todo, Comment)  
   that get re-rendered.
 
3. Explain the details of a Higher Order Component?
   A HOC is an advanced React pattern that transforms a component into another component 
   using composition(a function(component) that takes another function(component) as its 
   input to create an output(new class component SOURCE ). Instead of manipulating state 
   and passing into props, HOC allow us to re-use component logic and create re-usable 
   components. Each component that is created will have is own state (like a closure)which 
   is especially useful. We are creating “state-driven views' which is a key feature of React.

4. What are three different ways to style components in React? Explain some of the benefits of each.
   a) className declared in component that refers to a CSS style sheet. Easy to use but can become complex
      with multiple style sheets and shared styles
   b) Inline style(not recommended for maintainability)
   c) Styled Components(allows easily customization for re-usuable components for 
   various style types(e.g. Button, Form, Card for displaying data, etc.). 
   This can help implement consistent UX design into the application.
   d) ReactStrap(has BootStrap under the hood) is good for quick prototyping but you 
   are constrained with pre-defined styles that are difficult to customize. 
   e) SASS or LESS(this can create more complexity in maintainability but provides the 
   benefits of using nesting, mixins, etc.)   