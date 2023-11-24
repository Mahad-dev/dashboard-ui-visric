import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.jsx";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={routes} />
    </DndProvider>
  );
}

export default App;
