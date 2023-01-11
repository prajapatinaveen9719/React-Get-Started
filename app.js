/*React,createElement take 3 params
 *1 :  type of element which you want to create
 *2 :  attribute you can define id or your own attribute
 *3 :  Children or value
 *
 *
 */

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Om Namah Shivaay"
);

const title = React.createElement(
  "p",
  {
    id: "title",
    type: "God",
  },
  "Om Namah Shivaay"
);

const div = React.createElement(
  "div",
  {
    id: "dvID",
  },
  [heading, title]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
