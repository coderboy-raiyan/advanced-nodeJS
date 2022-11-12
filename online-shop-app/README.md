### What is Template engine and why we use it

-   In express js if we need to generate dynamic content we use template engines.
-   There are lot's of template engines like : pug, ejs, handlebars etc.
-   The most favorite and commonly used template engine is ejs and I loved it.
-   if you want to use template engine you need to register it on express by
    [app.set("view engine", "ejs")]
-   Also you need to define the directory of your views like : [app.set("views", "views")]

-   views : A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array.

Example

```
app.set("view engine", "ejs");
app.set("views", "views");
```

[Reference](https://expressjs.com/en/api.html#app.set:~:text=production%2C%20otherwise%20undefined.-,view%20engine,-String)
