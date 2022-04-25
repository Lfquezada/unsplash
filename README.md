# Displash :art:
A react based replica of *unsplash.com*. Objetive: put into practice knowledge learned in the course on the topic of the javascript development stack. The goal is to choose a web page and create an identical copy of the style of the site. create-react-app is not allowed.

# Result :desktop_computer:
[Original](https://unsplash.com)
[Replica](http://stw-uvg-22.site:4028)

## Requisites

Task | Accomplished
------------ | -------------
README | :white_check_mark:
No HTML | :white_check_mark:
React | :white_check_mark:
Babel | :white_check_mark:
Webpack | :white_check_mark:
ESLint | :white_check_mark:
Sass | :white_check_mark:
Image loaders | :white_check_mark:
Animations | :white_check_mark:
Nginx | :white_check_mark:
Server Side Rendering | :x:

## Tech
Plenty of tools were used to create Displash. SASS was used for better CSS formatting and making it easier to organiza visual elements in a tree-like structure. Prettier and ESLint where used to keep the code organized, bug-free and compliant with Airbnb rules. Wepack and babel were also implemented to better compress all the files into a single bundle file, allowing the deployment process to be more simple and universal for different browsers. React was the main technology used to build the replica website. It allowed me to create different components for each of the website sections and put them together in a single page. Finally, quite a few loaders were used in this project, such as Image loader, SASS loader, CSS loader, style loader and the babel loader.

## Usage
#### See :eye:
```
open bundle/index.html
```

#### Build :hammer:
```
npm run build
```

#### Test :test_tube:
```
npm test
```
