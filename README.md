# VertexTube
desafio para vaga de front-end

# instructions
// TODO: broken at the moment since i can't share my google api key publicly.
// add it as instruction, add instructions to .env cfg or deploy the app!
npm start

## design decisions
All global context from this app comes from window.location (browser's URL) and since i am using react-router-dom i can use their own custom hooks useLocation and useHistory to share data between components. It provides a better user experience since a user can navigate directly to a bookmark or link to see a video detail.

stateful component logic is contained within each component through hooks (useState and useEffects).
If there were more than one item render styling (i. e.: big card and small card) a list item high-order component and render props pattern would be more suitable to the project.

business logic is contained within util/youtube and a given method will always return error, isLoading and data.