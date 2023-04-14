# 🧑‍💻 Approach

&nbsp; The project was made thinking that it will be used by a team manager, so it will list the users and the company where it works, which I think were the mainly data that the client will want to see. The other information can be accessed by pressing the user card.

<br>
<br>

# 🗃️ Folder Structure

```
.
└── src/
    ├── 📦️ components
    ├── 🔍️ navigation
    ├── 📱 screens
    ├── 🚀 services
    └── 💄 styles
```

<br>

## 📦️ Components

&nbsp; This folder is self explanatory, is where all the components of the project are stored.

&nbsp; I could group even more the components in its own sections, but it is a small project, so I don't think it is that necessary. The creation of folders for every component is unnecessary, but I think it is useful to maintain the project readable.

<br>

## 🔍️ Navigation

&nbsp; The navigation folder store the configurations for the react-native-navigation package.

<br>

## 📱 Screens

&nbsp; The files on this folder are the views of the app. I didn't create a folder for every view because I don't think it will be views enough to make the screens folder unreadable.

<br>

## 🚀 Services

&nbsp; Here I stored the graphql logic. This was mainly my problem with graphql, I didn't know well where to store it, so this was my better idea.

<br>

## 💄 Styles

&nbsp; This folder stores the global styles of the app, for the purpose of avoiding style redefinitions.

<br>

# 💡 Possible Improvements

&nbsp; This is something that I always do when "finalizing" a project(I always have new ideas while developing). I would like to add a search bar on the top, where the navigation header is placed, so that you can filter the users. The pagination wasn't implemented because the api return only ten users, and the api doesn't support offset pagination neither page pagination, I did think that I could implemented it by limiting the users array, and splice it constantly, but it would add more complexity to frontend and the pagination wouldn't have sense, I'm still fetching all the data, so paginating in the frontend would be as bad as not paginating at all. If I have to say, I will use infinite scroll to make the pagination btw, it seems very funny to implement.

<br>
<br>

## 🍻 Thanks for reading!
