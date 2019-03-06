# Type

[typy](https://www.npm.com/package/typy) is generously used to type check.

## Path

The asset path such as ([template](./#template)) are referred by default relatively to the page path.

### Examples

#### Case 1: relative path

##### Page

The page is located in `app/theme/<my_theme>/<some_feature>/some_feature.page.js`.
The page path is set by code.
In this case, the page name will be set to __'some_feature/some_feature'__.

##### Template

The template real file is located in `app/theme/<my_theme>/<some_feature>/some_feature.html.twig`.
To be found by the app, the Template.name must be set to __'some_feature'__.

##### Application

The application will retrieve the path `app/theme` from the core config.
The application will retrieve the theme name from `app/config/files.js` config.

Aggregate all those information and the template real path can be found:
**theme_folder** + **theme_name** + **page_path** + **template_path**

#### Case 2: absolute path

##### Page

The page is located in `app/theme/<my_theme>/<some_feature>/some_feature.page.js`.
The page path is set by code.
In this case, the page name will be set to __'some_feature/some_feature'__.

##### Template

The template real file is located in `app/theme/<my_theme>/index.html.twig`.
To be found by the app, the Template.name must be set to __'/index'__.

##### Application

The application will retrieve the path `app/theme` from the core config.
The application will retrieve the theme name from `app/config/files.js` config.

In the case of absolute path the page path is ignore:
**theme_folder** + **theme_name** + **template_path**

## List of types

### [page](./page)

### [template](./template)
